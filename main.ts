import * as fs from "node:fs";

const line =
  "You will deploy on Friday at 4:59 p.m., and the pager will sing your name before the pizza arrives.";

// Gate check: the competition allows at most 120 characters, one line.
if (!line || line.length > 120 || line.includes("\n")) {
  throw new Error(`entry line fails gate: length ${line.length}`);
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", line + "\n", "utf8");
fs.chmodSync("/output/entry.txt", 0o644);
