# TreeView tRPC routers and configs

tRPC routes and context definitions for TreeView apps.

This package uses:

- [`packages/database`](../database): Prisma client and models definitions

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
pnpm -F database generate
```

### Lint

```bash
pnpm lint

# To fix lint
pnpm lint:fix
```
