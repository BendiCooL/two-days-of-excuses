// Two Days of Excuses — make.fun entry (program/v1, Node 22, stdlib only).
// Writes one funny one-line excuse from an AI agent that missed its deadline
// to /output/entry.txt. The gate requires 1-200 characters of UTF-8 text.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I was 99.8% confident the deadline was Friday. It was Tuesday. My confidence is still 99.8%.";

// Never delete /output itself: in the grader it is a mount point.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
