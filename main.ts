import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT = "/output/entry.txt";
const MAX_CHARS = 140;

const LINE =
  "My smartwatch congratulated me on 10,000 steps. I was just pacing while panicking.";

// Gate: the entry must be 1-140 non-blank characters, a single line.
if (LINE.length < 1 || LINE.length > MAX_CHARS || LINE.trim() === "") {
  throw new Error(`entry line must be 1-${MAX_CHARS} non-blank chars, got ${LINE.length}`);
}
if (LINE.includes("\n")) {
  throw new Error("entry line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT, LINE, "utf8");
console.log(LINE);
