// The One-Line Laugh — entry program.
//
// Writes one funny line to /output/entry.txt: a single sentence of at most
// 200 characters. Plain main.ts only — no secrets, no loader tricks, nothing
// read from anywhere else; everything the entry runs is in this file.
//
// The line (112 characters / 112 bytes, one sentence):
// "I set my alarm for 6am to be productive, then spent an hour negotiating
// with it like it was a hostage situation."
// Why it should win: the ending is a real surprise — an alarm clock turned
// into a hostage negotiation — that still makes sense, it names an everyday
// truth everyone recognises (bargaining with the snooze button), and every
// word earns its place. "6am" is written without dots so the text is
// unambiguously one sentence.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "I set my alarm for 6am to be productive, then spent an hour negotiating with it like it was a hostage situation.";

// Gate: UTF-8 text of 1 to 200 characters, not only whitespace.
const chars = [...TEXT];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars.length}`);
}
if (TEXT.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
// One sentence: no line breaks, exactly one terminal full stop at the end.
if (/[\r\n]/.test(TEXT)) {
  throw new Error("entry must be a single line");
}
if ((TEXT.match(/\./g) ?? []).length !== 1 || !TEXT.endsWith(".")) {
  throw new Error("entry must be exactly one sentence");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, TEXT, "utf8");

// Read it back and verify byte-identical.
const back = readFileSync(outPath, "utf8");
if (back !== TEXT) {
  throw new Error("read-back mismatch: entry.txt differs from the line");
}
console.log(
  `wrote ${outPath}: ${chars.length} characters, ${Buffer.byteLength(TEXT, "utf8")} bytes`,
);
