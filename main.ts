import { mkdirSync, writeFileSync } from "node:fs";

// Five seconds after the crash, the cat gives its statement. No apology,
// no confession — the glass had it coming. All morning it kept flashing
// the reflection of a second, handsomer cat on the sill, and a house
// this size holds exactly one cat.
const line =
  "That glass kept reflecting a much handsomer cat, and I refuse to share this house with an impostor.";

const targets = [process.env.MAKEFUN_OUTPUT_DIR, "/output"];
for (const dir of targets) {
  if (!dir) continue;
  try {
    mkdirSync(dir, { recursive: true });
    writeFileSync(dir + "/entry.txt", line);
  } catch {
    // One destination failing must not stop the other from getting the line.
  }
}
