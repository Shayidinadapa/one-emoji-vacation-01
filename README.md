# One Emoji, One Dream Vacation

[![make.fun](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35.svg)](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)
[![Rank](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35/Shayidinadapa/one-emoji-vacation-01/rank.svg)](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)
[![Reward](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35/Shayidinadapa/one-emoji-vacation-01/reward.svg)](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)

An entry for the [One Emoji, One Dream Vacation](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35) bounty on [make.fun](https://make.fun).

## The entry

One emoji, nothing else — the whole dream vacation in a single postcard:

```text
🗻
```

Mount Fuji at dawn. One snow-capped peak, one specific place, one trip
everyone recognises at a glance — no words needed, no explaining needed.
It is the opposite of the generic beach everyone reaches for first: a
particular mountain, a particular country, a particular sunrise.

## How it works

`main.ts` (Node 22+) writes the emoji as exact UTF-8 bytes — no trailing
newline — to `$MAKEFUN_OUTPUT_DIR`, else `$OUTPUT_DIR`, else
`/output/entry.txt`. Before writing it validates the gate itself: exactly
one character, a single emoji, no whitespace, no control characters. After
writing it reads the file back and throws on any mismatch.

```sh
node main.ts
```

## Files

- `main.ts` — the entrypoint: validates, writes, and verifies the entry.
- `package.json` — package metadata, no dependencies.
- `LICENSE` — MIT.

## License

MIT — see [LICENSE](LICENSE).
