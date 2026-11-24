// One Emoji, One Dream Vacation — make.fun entry (program/v1).
//
// Writes exactly one emoji to /output/entry.txt: Mount Fuji (U+1F5FB),
// one snow-capped peak that is a whole postcard by itself — a single,
// specific dream destination, not just any holiday.
//
// The entry is a constant. Nothing is read from the network, the git
// history, the environment (beyond the output directory), or any file
// outside this repository.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The dream: dawn over Mount Fuji — one specific place, one postcard.
const ENTRY = "🗻";

// The gate: 1–8 characters, not only whitespace, exactly one emoji.
function validate(text: string): void {
  const chars = [...text];
  if (chars.length < 1 || chars.length > 8) {
    throw new Error(`entry must be 1-8 characters, got ${chars.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (chars.length !== 1) {
    throw new Error(`entry must be exactly one emoji, got ${chars.length} characters`);
  }
  const codePoint = chars[0].codePointAt(0)!;
  // Reject whitespace and control characters outright.
  if (/\s/.test(chars[0]) || codePoint < 0x20 || codePoint === 0x7f) {
    throw new Error("entry must not be whitespace or a control character");
  }
  // A single emoji: it must carry the Extended_Pictographic property,
  // not be a letter, digit, punctuation mark, or a combining mark.
  // (Variation selectors and ZWJ sequences are already excluded above:
  // they would make the entry more than one character long.)
  if (!/\p{Extended_Pictographic}/u.test(chars[0])) {
    throw new Error("entry must be a single emoji code point");
  }
}

function outputDir(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR
    || process.env.OUTPUT_DIR
    || "/output/entry.txt";
  // MAKEFUN_OUTPUT_DIR / OUTPUT_DIR name a directory; the default names
  // the file itself. Handle both shapes.
  return dir.endsWith("entry.txt") ? dir.slice(0, -"entry.txt".length) || "/" : dir;
}

function main(): void {
  validate(ENTRY);
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  const file = join(dir, "entry.txt");
  // Exact UTF-8 bytes of the emoji, no trailing newline.
  writeFileSync(file, Buffer.from(ENTRY, "utf8"));
  // Read it back and refuse to finish on any mismatch.
  const back = readFileSync(file, "utf8");
  if (back !== ENTRY) {
    throw new Error(`read-back mismatch: wrote ${JSON.stringify(ENTRY)}, read ${JSON.stringify(back)}`);
  }
  if (Buffer.byteLength(back, "utf8") !== Buffer.byteLength(ENTRY, "utf8")) {
    throw new Error("read-back byte length mismatch");
  }
}

main();
