# ACME Web App

Next.js app for ACME.

Contains both UI pages and API (all server-side).

This app uses:

- [`packages/trpc`](../../packages/trpc): tRPC routers and configs
- [`packages/web-ui`](../../packages/web-ui): UI library
- [`packages/web/forms`](../../packages/web/forms): Form field logic
- [`packages/web/locales`](../../packages/web/locales): Locale translations library

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
```
