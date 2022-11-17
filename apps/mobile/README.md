# ACME Mobile App

Expo app for TreeView.

This app uses:

- [`packages/api`](../../packages/api): tRPC routers and configs
- [`packages/mobile/ui`](../../packages/mobile/ui): UI library
- [`packages/mobile/forms`](../../packages/mobile/forms): Form components
- [`packages/mobile/locales`](../../packages/mobile/locales): Locale translations library

## Setup

```bash
pnpm install
```

## Available scripts

### Run

```bash
pnpm dev

# For device-specific runs
pnpm dev:android
pnpm dev:ios
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
