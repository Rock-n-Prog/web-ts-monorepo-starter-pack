# TreeView App

[![Build Web App](https://github.com/treeview-app/treeview/actions/workflows/build-apps-web.yml/badge.svg)](https://github.com/treeview-app/treeview/actions/workflows/build-apps-web.yml)
[![Build Mobile App](https://github.com/treeview-app/treeview/actions/workflows/build-apps-mobile.yml/badge.svg)](https://github.com/treeview-app/treeview/actions/workflows/build-apps-mobile.yml)
[![Build Web UI Package](https://github.com/treeview-app/treeview/actions/workflows/build-packages-web-ui.yml/badge.svg)](https://github.com/treeview-app/treeview/actions/workflows/build-packages-web-ui.yml)
[![Build tRPC Package](https://github.com/treeview-app/treeview/actions/workflows/build-packages-trpc.yml/badge.svg)](https://github.com/treeview-app/treeview/actions/workflows/build-packages-trpc.yml)
[![Format](https://github.com/treeview-app/treeview/actions/workflows/format.yml/badge.svg)](https://github.com/treeview-app/treeview/actions/workflows/format.yml)

Task management app, with a focus on tree view.

Made with love by [Fabien Roy](https://github.com/ExiledNarwal28).

This is an official pnpm starter turborepo.

Check the [project board](https://github.com/orgs/treeview-app/projects/1/views/1) for what we want to do next.

To contribute, make sure you have read the [docs](docs) and [contribution guide](CONTRIBUTING.md).

## Apps

- [`apps/web`](apps/docs): Next.js web app
- [`apps/mobile`](apps/mobile): Expo mobile app
- [`packages/web-ui`](packages/web-ui): React components for web app
- [`packages/trpc`](packages/trpc): tRPC routes and context definitions
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

# Running a single app and its deps
pnpm dev:web
pnpm dev:mobile
```

### Start storybook

#### Web UI Library

Storybook will be running on [http://localhost:6006](http://localhost:6006);

```bash
pnpm storybook:web
```

#### Mobile UI Library

Storybook will be running on [Expo Go](https://expo.dev/client).

```bash
pnpm storybook:mobile
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
