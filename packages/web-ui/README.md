# ACME Web UI library

React component library and theming necessities for ACME Web app.

This package uses:

- [`packages/theme`](../theme): Theme definitions
- [`packages/web/storage`](../web/storage): Storage utilities

## Setup

```bash
pnpm install
```

## Available scripts

### Start Storybook

Storybook will be running on [http://localhost:6006](http://localhost:6006);

```bash
pnpm storybook

# For smoke-testing
pnpm storybook:smoke-test
```

### Build Storybook

```bash
pnpm storybook:build
```

### Lint

```bash
pnpm lint

# To fix lint
pnpm lint:fix

# For code-specific linting
pnpm lint:code
pnpm lint:code:fix

# For styles-specific linting
pnpm lint:styles
```
