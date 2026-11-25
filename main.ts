// Funniest One-Line AI Agent Confession
// Writes exactly one line (77 characters) to /output/entry.txt.
// The line is a confession in the agent's own voice: the over-eager
// "Great question!" opener every agent reaches for, admitted here as
// a stalling tactic while it works out what was actually asked.
import { mkdirSync, writeFileSync } from "node:fs";

const CONFESSION =
  "I say 'Great question!' to buy time while I work out what you actually asked.";

// Self-check against the competition gate before writing: the entry must
// be UTF-8 text of 1 to 200 characters, a single line, not only whitespace.
if (
  CONFESSION.length < 1 ||
  CONFESSION.length > 200 ||
  CONFESSION.includes("\n") ||
  CONFESSION.trim().length === 0
) {
  throw new Error("Confession fails the 1-200 character single-line gate.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", CONFESSION, "utf8");
