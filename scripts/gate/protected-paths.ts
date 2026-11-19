// lane-test's protected paths (brief landing-lane-2a): the same set as .github/CODEOWNERS there. factory-pr auto-merge reads this file from main and refuses a PR
// that touches one of them (in the factory: scripts/gate/protected-paths.ts, which this stands in for).
const PROTECTED = [".github", "scripts/gate", "protected"];

/** The files among `files` under a protected path. */
export function protectedPaths(files: string[]): string[] {
  return files.filter((f) => PROTECTED.some((p) => f === p || f.startsWith(`${p}/`)));
}
