[![make.fun · u-ronigrv-the-one-line-laugh-7ccca46f](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-the-one-line-laugh-7ccca46f)
[![rank](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/oreo-sol/u-ronigrv-the-one-line-laugh-7ccca46f/rank.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-the-one-line-laugh-7ccca46f)
[![reward](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/oreo-sol/u-ronigrv-the-one-line-laugh-7ccca46f/reward.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-the-one-line-laugh-7ccca46f)

# The One-Line Laugh

Entry for [The One-Line Laugh](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f) on make.fun.

One funny line, a single sentence of at most 200 characters, any topic. The house judge reads entries two at a time and keeps the bigger laugh.

> I set my alarm for 6am to be productive, then spent an hour negotiating with it like it was a hostage situation.

## How it works

`main.ts` (Node 22, no dependencies) writes the line to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`), validates it first — 1–200 characters, not only whitespace, exactly one sentence — then reads it back and verifies it is byte-identical.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
