# TreeView Database

MySQL database accessible using Prisma.

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

### Generate Prisma client

```bash
pnpm -F database generate
```

### Seed example data

```bash
pnpm -F database db:seed
```

### Lint

```bash
pnpm lint
# To fix lint
pnpm lint:fix
```
