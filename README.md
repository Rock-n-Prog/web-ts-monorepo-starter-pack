# TreeView App

[![Build Web](https://github.com/treeview-app/treeview/actions/workflows/build-web.yml/badge.svg)](https://github.com/treeview-app/treeview/actions/workflows/build-web.yml)
[![Build Web UI](https://github.com/treeview-app/treeview/actions/workflows/build-web-ui.yml/badge.svg)](https://github.com/treeview-app/treeview/actions/workflows/build-web-ui.yml)
[![Format](https://github.com/treeview-app/treeview/actions/workflows/format.yml/badge.svg)](https://github.com/treeview-app/treeview/actions/workflows/format.yml)

Task management app, with a focus on tree view.

Made with love by [Fabien Roy](https://github.com/ExiledNarwal28).

This is an official pnpm starter turborepo.

Check the [project board](https://github.com/orgs/treeview-app/projects/1/views/1) for what we want to do next.

To contribute, make sure you have read the [docs](docs) and [contribution guide](CONTRIBUTING.md).

## Apps

- [`apps/web`](apps/docs): Next.js web app
- [`packages/web-ui`](packages/web-ui): React components for web app
- [`packages/eslint-config-custom`](packages/eslint-config-custom): Shared eslint config
- [`packages/tsconfig`](packages/tsconfig): Shared tsconfig

## Setup

### Install dependencies

```bash
pnpm install
```

### Prepare pre-commit hook

```bash
pnpm prepare
```

## Available scripts

### Run apps

```bash
pnpm dev
```

### Start storybook

Storybook will be running on [http://localhost:6006](http://localhost:6006);

```bash
# For Web UI library
pnpm storybook:web-ui
```

### Build apps

```bash
pnpm build
```

### Lint apps

```bash
pnpm lint
pnpm format

# To fix lint
pnpm lint:fix
pnpm format:fix

# To only apply to root
pnpm lint:root
pnpm lint:root:fix

# Fix lint on staged files
pnpm lint:staged
```

### Cleanup files

```bash
pnpm yeet
```
