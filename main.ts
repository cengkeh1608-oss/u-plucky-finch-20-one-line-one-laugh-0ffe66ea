import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "I asked my agent to be more human. It started ignoring my messages.";
// Winner D21 (67 chars, 25/25): "be more human" -> ghosting. The most human
// trait turns out to be ignoring messages — instant, no setup, and no other
// draft used this angle. Beat D03 (will) and D23 (HR) on tie-break: zero
// inference needed, punchline lands at the last two words.

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
