# TreeView App

Task management app, with a focus on tree view.

Made with love by [Fabien Roy](https://github.com/ExiledNarwal28).

This is an official pnpm starter turborepo.

Check the [project board](https://github.com/orgs/treeview-app/projects/1/views/1) for what we want to do next.

To contribute, make sure you have read the [contribution guide](CONTRIBUTING.md).

## Apps

- [`apps/docs`](apps/docs): Next.js web app for project documentation
- [`apps/web`](apps/docs): Next.js main web app
- [`packages/web-ui`](packages/web-ui): React components for web apps
- [`packages/eslint-config-custom`](packages/eslint-config-custom): Shared eslint config
- [`packages/tsconfig`](packages/tsconfig): Shared tsconfig

## Setup

```bash
pnpm install
```

## Available scripts

### Run apps

```bash
pnpm dev
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

# Fix lint on staged files
pnpm lint:staged
```
