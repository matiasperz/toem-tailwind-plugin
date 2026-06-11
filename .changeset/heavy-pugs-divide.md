---
'toem-tailwind-plugin': patch
---

Fix the ratio parser: decimals and negative values now work.

- `w-em-[160.93/16]` previously truncated to `160` via `parseInt` and silently degraded to single-value mode (`calc(160 / var(--toem-base, 16) * 1em)`); it now emits `10.058125em`.
- Negative values are supported inside the brackets (`my-em-[-12/16]` → `-0.75em`). This is also the reliable way to express negatives under Tailwind v4, whose compat layer emits the dash-prefix variant (`-my-em-[12/16]`) unnegated.
- The regex is now anchored, so malformed values (`12px`, `1/2/3`) emit the invalid-arguments marker instead of a partial match.
