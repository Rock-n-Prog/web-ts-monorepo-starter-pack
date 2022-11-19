# Golden Rules

1. Avoid using `class` and OO principles. Stick to functional programming, at least within our codebase.
2. Document everything. If unsure, ask a teammate! Knowledge is power.
3. Prefer `type` over `interface`.
4. Without over-engineering, isolate UI libraries and icons into the `packages/web/ui` and `packages/mobile/ui` folders.
5. Use `pnpm`, never `npm`, nor `yarn`.
6. Always use a linter, in a way, it can act as pre-build testing.
7. Domain logic shouldn't be placed in the frontend, nor should it be tested here. Leave that to the backend.
8. A good CI is not a nice-to-have, it is a necessity.
9. English is the only used language.
