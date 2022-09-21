# TreeView App

Task management app, with a focus on tree view.

Made with love by [Fabien Roy](https://github.com/ExiledNarwal28).

This is an official pnpm starter turborepo.

Check the
[project board](https://github.com/orgs/treeview-app/projects/1/views/1)
for what we want to do next.

To contribute, make sure you have read the [contribution guide](CONTRIBUTING.md).

## Apps

- [`apps/docs`](apps/docs/README.md): Next.js web app for project documentation
- [`apps/web`](apps/docs/README.md): Next.js main web app
- [`packages/web-ui`](packages/web-ui/README.md): React components for web apps
- [`packages/eslint-config-custom`](packages/eslint-config-custom/README.md): Shared eslint config
- [`packages/tsconfig`](packages/tsconfig/README.md): Shared tsconfig

## Setup

```bash
pnpm install
```

## Available scripts

### Run apps

```bash
pnpm run dev
```

### Build apps

```bash
pnpm run build
```

### Lint apps

```bash
pnpm run lint
pnpm run format

# To fix lint
pnpm run lint:fix
pnpm run format:fix
```
