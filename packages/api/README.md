# ACME tRPC routers and configs

tRPC routes and context definitions for ACME apps.

This package uses:

- [`packages/db`](../db): Prisma client and models definitions

## Setup

```bash
pnpm install
```

## Available scripts

### Build

```bash
pnpm build

# To --watch
pnpm build:watch
```

```bash
pnpm -F @acme/db generate
```

### Lint

```bash
pnpm lint

# To fix lint
pnpm lint:fix
```
