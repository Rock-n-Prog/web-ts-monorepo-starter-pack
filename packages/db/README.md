# ACME Database

MySQL database accessible using Prisma.

**See root's [`README.md`](../../README.md) for info on running and linking a local Docker container for database.**

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

### Generate Prisma client

```bash
pnpm db:generate
```

### Seed example data

```bash
pnpm db:seed
```

### Lint

```bash
pnpm lint
# To fix lint
pnpm lint:fix
```
