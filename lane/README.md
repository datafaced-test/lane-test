# lane-test: what is here

A public test repository of the datafaced-test organisation: the rehearsal ground of the factory's landing lane (datafaced/factory, ADR-2026-11-19-69; brief
landing-lane-2a). Nothing here is production. Its files come from the factory's scripts/host/lane-test/ by scripts/host/lane-test-bootstrap.sh.

- `lane/floor.txt`: the floor passes when it says `pass`.
- `protected/`: a protected path (code owner André).
- `scripts/gate/protected-paths.ts`, `scripts/delivery/prepare-steps.json`: what factory-pr reads from main.
