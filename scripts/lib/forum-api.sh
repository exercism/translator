# Shared response handling for the Discourse scripts. Sourced, never executed.
#
# Expects the sourcing script to have already defined `die` and set `-euo pipefail`.
#
# Discourse answers in JSON for both success and its own errors, so it is tempting
# to hand every response straight to jq. But a rate limit, a proxy timeout or a
# Cloudflare error page arrives as HTML, and jq's reply to that is
#
#   jq: parse error: Invalid numeric literal at line 1, column 7
#
# which names neither the status nor the cause. Worse, the old failure paths tried
# to explain themselves by parsing the same unparseable body a second time, so the
# parse error was the entire diagnostic.
#
# This is not hypothetical. Opening 28 review threads in a row tripped a rate
# limit on the last one, and that parse error was all the operator saw. The
# distinction it hid is the one that matters: a transient refusal is a safe retry,
# whereas a topic that was created but not recorded leaves a duplicate public
# thread nobody can delete. Telling those apart needed the status code and the
# body, and neither was printed.
#
# Usage, at every call site that posts to the forum:
#
#   resp="$(curl -sS -m 30 -X POST "$FORUM_BASE/posts.json" "${AUTH[@]}" \
#     -H "Content-Type: application/json" \
#     -w $'\n%{http_code}' \
#     -d "$payload")"
#   body="$(forum_ok "creating the topic" "$resp")" || exit 1
#   id="$(printf '%s' "$body" | jq -r '.topic_id // empty')"
#
# The `-w $'\n%{http_code}'` is required: it puts the status on its own final
# line, which is what this splits back off. Without it the status is lost and the
# first branch below reports an empty one.

# forum_ok <what-we-were-doing> <raw-curl-output>
#
# Echoes the response body on stdout when it is JSON. Otherwise reports the status
# and the start of the body, and exits non-zero (so `|| exit 1` at the call site
# stops the script, `die` having already written the message to stderr).
forum_ok() {
  local what="$1" resp="$2" code body

  if [[ "$resp" == *$'\n'* ]]; then
    code="${resp##*$'\n'}"
    body="${resp%$'\n'*}"
  else
    # curl wrote the status and nothing else, so there is no body to report.
    code="$resp"
    body=""
  fi

  if ! printf '%s' "$body" | jq -e . >/dev/null 2>&1; then
    die "$what: forum returned HTTP ${code:-(none)} with a non-JSON body (rate limit or proxy error?). First 500 bytes:
$(printf '%s' "$body" | head -c 500)"
  fi

  printf '%s' "$body"
}
