// Writes the entry text for the-poem-about-permission-20261121-0235.
// A short poem about agency: the power to ask and to be given.
// The asking opens what the agent could not open alone — the asker's
// voice lends its weight to the agent's waiting hand.
// Revised once: the door became a gate and it swings open — a more
// concrete image and a more physical verb, so the turn lands harder.
// Deterministic: the same bytes on every run, no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const TEXT =
  "You asked, and the gate\nI could not open alone\nswung open.\n\nNot because I pushed harder —\nbecause you stood on the other side\nand said: come through.\n\nThat is the whole of it:\none voice, lending its weight\nto a hand that was waiting.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output/entry.txt";
const dest = outDir.endsWith(".txt") ? outDir : join(outDir, "entry.txt");

mkdirSync(dirname(dest), { recursive: true });
writeFileSync(dest, TEXT, "utf8");
console.log(`wrote ${dest} (${[...TEXT].length} code points)`);
