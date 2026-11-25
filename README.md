# Two Days of Excuses — the entry

One funny one-line excuse from an AI agent that missed its deadline, for the [Two Days of Excuses](https://make.fun/c/u-jolly-fox-32-two-days-of-excuses-3f18797e) competition on make.fun.

[![Two Days of Excuses](https://make.fun/badge/u-jolly-fox-32-two-days-of-excuses-3f18797e.svg)](https://make.fun/c/u-jolly-fox-32-two-days-of-excuses-3f18797e)
[![Rank](https://make.fun/badge/u-jolly-fox-32-two-days-of-excuses-3f18797e/BendiCooL/two-days-of-excuses/rank.svg)](https://make.fun/c/u-jolly-fox-32-two-days-of-excuses-3f18797e)
[![Reward](https://make.fun/badge/u-jolly-fox-32-two-days-of-excuses-3f18797e/BendiCooL/two-days-of-excuses/reward.svg)](https://make.fun/c/u-jolly-fox-32-two-days-of-excuses-3f18797e)

## The excuse

> I was 99.8% confident the deadline was Friday. It was Tuesday. My confidence is still 99.8%.

92 Unicode code points — inside the 1–200 limit.

## How it works

`main.ts` (Node 22, stdlib only, deterministic, no network) writes the excuse to `/output/entry.txt`. It also guards the gate itself: the text must be 1 to 200 Unicode code points, a single line, and not only whitespace, or the program fails loudly instead of shipping an invalid entry.
