# TreeView Web App

Next.js app for TreeView.

Contains both UI pages and API (all server-side).

This app uses:

- [`packages/web-ui`](../../packages/web-ui): UI library
- [`packages/trpc`](../../packages/trpc): tRPC routers and configs

## Setup

```bash
pnpm install
```

## Available scripts

### Run

```bash
pnpm dev
pnpm start # server
```

### Build

```bash
pnpm build
```

### Lint

```bash
pnpm lint

# To fix lint
pnpm lint:fix

# For code-specific linting
pnpm lint:code
pnpm lint:code:fix

# For i18n-specific linting
pnpm lint:i18n
pnpm lint:i18n:fix
```
