// deepseek.mjs: the translation engine. DeepSeek translates every language.
//
// Ported from the DeepSeek adapter in Jiki's scripts/lib/engines.js, with three
// differences, all because one script now does a whole pass:
//
//   - it throws instead of exiting, so one failed item does not end a run of four
//     thousand. The caller retries, then leaves the item absent and reports it.
//   - curl is spawned asynchronously, so several calls can be in flight.
//   - the model, endpoint and reasoning effort come from config.json, the one
//     place they are pinned.
//
// An adapter's call() returns { text, usage } where usage is
//   { input, cacheHit, cacheMiss, thinking, output, cost }
// `output` is billable output inclusive of thinking tokens; `cost` is dollars.
//
// The API key is read in scripts/lib/config.mjs and passed in. It is never
// logged or written to a file. It reaches curl through a config file on stdin
// (`-K -`), because anything in argv is visible to `ps`.

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawn } from "node:child_process";
import { Failure, config } from "./config.mjs";

const MAX_HTTP_ATTEMPTS = 5;
const BASE_BACKOFF_MS = 4000;
const REQUEST_TIMEOUT_S = 120;

// Cloudflare fronts this host and has been seen returning 403 to non-browser
// clients, so requests go through curl with a browser-like user agent.
const USER_AGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 " +
  "(KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36";

// DeepSeek pricing, in dollars per million tokens, off-peak. Input is billed at
// two very different rates depending on whether the prompt prefix hit the cache
// (a hit is 120x cheaper than a miss), so every cost line uses both rates. That
// ratio is why the prompt is assembled in a fixed order (see
// scripts/lib/prompt.mjs). DeepSeek charges double during peak hours
// (01:00-04:00 and 06:00-10:00 UTC, weekdays).
//
// deepseek-flash, off-peak, from api-docs.deepseek.com/quick_start/pricing on
// 2026-09-18.
export const USD_PER_CACHE_HIT = 0.003 / 1_000_000;
export const USD_PER_CACHE_MISS = 0.15 / 1_000_000;
export const USD_PER_OUTPUT = 0.6 / 1_000_000;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function curl(args, stdin) {
  return new Promise((resolve) => {
    const child = spawn("curl", args, { stdio: ["pipe", "pipe", "pipe"] });
    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (chunk) => (stdout += chunk));
    child.stderr.on("data", (chunk) => (stderr += chunk));
    child.on("error", (error) => resolve({ status: -1, stdout, stderr: error.message }));
    child.on("close", (status) => resolve({ status, stdout, stderr }));
    child.stdin.end(stdin);
  });
}

export function usageOf(raw) {
  const input = raw.prompt_tokens ?? 0;
  const cacheHit = raw.prompt_cache_hit_tokens ?? 0;
  const cacheMiss = raw.prompt_cache_miss_tokens ?? Math.max(input - cacheHit, 0);
  const output = raw.completion_tokens ?? 0;
  const thinking = raw.completion_tokens_details?.reasoning_tokens ?? 0;
  return { input, cacheHit, cacheMiss, thinking, output, cost: cacheHit * USD_PER_CACHE_HIT + cacheMiss * USD_PER_CACHE_MISS + output * USD_PER_OUTPUT };
}

export function addUsage(total, usage) {
  for (const key of ["input", "cacheHit", "cacheMiss", "thinking", "output", "cost"]) total[key] = (total[key] ?? 0) + (usage[key] ?? 0);
  return total;
}

/**
 * One OpenAI-compatible chat/completions call, retrying on 429, 5xx and a
 * curl-level failure. Anything else throws, because resending a 400 will not
 * help.
 *
 * Thinking mode is on by default for this model, and `temperature` is not
 * supported while thinking, so none is sent. `reasoning_effort` controls it
 * instead.
 */
export async function call({ apiKey, system, prompt, json = false }) {
  const engine = config().engine;
  const body = {
    model: engine.model,
    messages: [
      { role: "system", content: system },
      { role: "user", content: prompt }
    ],
    stream: false
  };
  if (engine.reasoning_effort) body.reasoning_effort = engine.reasoning_effort;
  if (json) body.response_format = { type: "json_object" };

  const stamp = `${process.pid}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const bodyFile = path.join(os.tmpdir(), `deepseek-body-${stamp}.json`);
  const outFile = path.join(os.tmpdir(), `deepseek-out-${stamp}.json`);
  fs.writeFileSync(bodyFile, JSON.stringify(body));

  // curl's -K format: one option per line, values double-quoted.
  const quoted = (value) => `"${String(value).replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
  const curlConfig = [
    `url = ${quoted(engine.endpoint)}`,
    `request = "POST"`,
    `header = "Content-Type: application/json"`,
    `header = ${quoted(`Authorization: Bearer ${apiKey}`)}`,
    `header = ${quoted(`User-Agent: ${USER_AGENT}`)}`,
    `data-binary = ${quoted(`@${bodyFile}`)}`,
    `max-time = ${REQUEST_TIMEOUT_S}`,
    `output = ${quoted(outFile)}`,
    `write-out = "%{http_code}"`
  ].join("\n");

  try {
    for (let attempt = 1; attempt <= MAX_HTTP_ATTEMPTS; attempt++) {
      const result = await curl(["-sS", "--http1.1", "-K", "-"], curlConfig);
      const wait = BASE_BACKOFF_MS * 2 ** (attempt - 1);

      if (result.status !== 0) {
        const detail = result.stderr.trim().slice(0, 400);
        if (attempt === MAX_HTTP_ATTEMPTS) throw new Failure(`curl failed: ${detail}`);
        await sleep(wait);
        continue;
      }

      const status = result.stdout.trim();
      const payloadText = fs.existsSync(outFile) ? fs.readFileSync(outFile, "utf8") : "";
      if (status === "200") {
        let payload;
        try {
          payload = JSON.parse(payloadText);
        } catch {
          throw new Failure(`unparseable response from DeepSeek: ${payloadText.slice(0, 400)}`);
        }
        const choice = payload.choices?.[0];
        if (!choice) throw new Failure(`no choice in the response: ${payloadText.slice(0, 400)}`);
        const text = choice.message?.content ?? "";
        const usage = usageOf(payload.usage ?? {});
        const fail = (message) => Object.assign(new Failure(message), { usage });
        if (!text.trim()) throw fail(`empty completion (finish_reason: ${choice.finish_reason ?? "unknown"})`);
        if (choice.finish_reason === "length") throw fail("the response hit the output limit, so the output is truncated");
        if (choice.finish_reason && choice.finish_reason !== "stop") throw fail(`generation did not finish cleanly (finish_reason: ${choice.finish_reason})`);
        return { text, usage };
      }

      const code = Number(status);
      const retryable = code === 429 || code >= 500;
      if (!retryable || attempt === MAX_HTTP_ATTEMPTS) throw new Failure(`HTTP ${status} from DeepSeek: ${payloadText.slice(0, 400)}`);
      await sleep(wait);
    }
  } finally {
    for (const file of [bodyFile, outFile]) if (fs.existsSync(file)) fs.rmSync(file);
  }
  throw new Failure("unreachable");
}

/** Strip a code fence that the model wrapped around the whole output, if there is one. */
export function unfence(text) {
  const trimmed = text.trim();
  const fenced = /^```[a-zA-Z]*\n([\s\S]*)\n```$/.exec(trimmed);
  // Only when the fence wraps everything. A document that happens to start and
  // end with its own code blocks must keep them.
  if (fenced && !/^```/m.test(fenced[1])) return `${fenced[1].trim()}\n`;
  return `${trimmed}\n`;
}
