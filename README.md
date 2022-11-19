# ACME App

Feature-heavy example monorepo for web and mobile apps, packed with tons of reusable code snippets and defined through a
strong software architecture.

Made with love by [Fabien Roy](https://github.com/ExiledNarwal28).

Check the [project board](https://github.com/orgs/treeview-app/projects/1/views/1) for what we want to do next.

To contribute, make sure you have read the [docs](docs) and [contribution guide](CONTRIBUTING.md).

## Status

| Name             | Type    | Status                                                                                                                                                                                                                                  |
| ---------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| General          | General | [![General](https://github.com/treeview-app/treeview/actions/workflows/general.yml/badge.svg)](https://github.com/treeview-app/treeview/actions/workflows/general.yml)                                                                  |
| Web              | App     | [![Build Web App](https://github.com/treeview-app/treeview/actions/workflows/build-apps-web.yml/badge.svg)](https://github.com/treeview-app/treeview/actions/workflows/build-apps-web.yml)                                              |
| Mobile           | App     | [![Build Mobile App](https://github.com/treeview-app/treeview/actions/workflows/build-apps-mobile.yml/badge.svg)](https://github.com/treeview-app/treeview/actions/workflows/build-apps-mobile.yml)                                     |
| Mobile Storybook | App     | [![Build Mobile Storybook App](https://github.com/treeview-app/treeview/actions/workflows/build-apps-mobile-storybook.yml/badge.svg)](https://github.com/treeview-app/treeview/actions/workflows/build-apps-mobile-storybook.yml)       |
| Database         | Package | [![Build Database Package](https://github.com/treeview-app/treeview/actions/workflows/build-packages-database.yml/badge.svg)](https://github.com/treeview-app/treeview/actions/workflows/build-packages-database.yml)                   |
| tRPC             | Package | [![Build tRPC Package](https://github.com/treeview-app/treeview/actions/workflows/build-packages-trpc.yml/badge.svg)](https://github.com/treeview-app/treeview/actions/workflows/build-packages-trpc.yml)                               |
| Theme            | Package | [![Build Theme Package](https://github.com/treeview-app/treeview/actions/workflows/build-packages-theme.yml/badge.svg)](https://github.com/treeview-app/treeview/actions/workflows/build-packages-theme.yml)                            |
| Web UI           | Package | [![Build Web UI Package](https://github.com/treeview-app/treeview/actions/workflows/build-packages-web-ui.yml/badge.svg)](https://github.com/treeview-app/treeview/actions/workflows/build-packages-web-ui.yml)                         |
| Web Forms        | Package | [![Build Web Forms Package](https://github.com/treeview-app/treeview/actions/workflows/build-packages-web-forms.yml/badge.svg)](https://github.com/treeview-app/treeview/actions/workflows/build-packages-web-forms.yml)                |
| Web Locales      | Package | [![Build Web Locales Package](https://github.com/treeview-app/treeview/actions/workflows/build-packages-web-locales.yml/badge.svg)](https://github.com/treeview-app/treeview/actions/workflows/build-packages-web-locales.yml)          |
| Web Storage      | Package | [![Build Web Storage Package](https://github.com/treeview-app/treeview/actions/workflows/build-packages-web-storage.yml/badge.svg)](https://github.com/treeview-app/treeview/actions/workflows/build-packages-web-storage.yml)          |
| Mobile UI        | Package | [![Build Mobile UI Package](https://github.com/treeview-app/treeview/actions/workflows/build-packages-mobile-ui.yml/badge.svg)](https://github.com/treeview-app/treeview/actions/workflows/build-packages-mobile-ui.yml)                |
| Mobile Forms     | Package | [![Build Mobile Forms Package](https://github.com/treeview-app/treeview/actions/workflows/build-packages-mobile-forms.yml/badge.svg)](https://github.com/treeview-app/treeview/actions/workflows/build-packages-mobile-forms.yml)       |
| Mobile Locales   | Package | [![Build Mobile Locales Package](https://github.com/treeview-app/treeview/actions/workflows/build-packages-mobile-locales.yml/badge.svg)](https://github.com/treeview-app/treeview/actions/workflows/build-packages-mobile-locales.yml) |
| Mobile Storage   | Package | [![Build Mobile Storage Package](https://github.com/treeview-app/treeview/actions/workflows/build-packages-mobile-storage.yml/badge.svg)](https://github.com/treeview-app/treeview/actions/workflows/build-packages-mobile-storage.yml) |

## Apps

- [`apps/web`](apps/docs): Next.js web app
- [`apps/mobile`](apps/mobile): Expo mobile app
- [`apps/mobile-storybook`](apps/mobile-storybook): Expo mobile app for Storybook

## Packages

- [`packages/database`](packages/database): Prisma client and models definitions
- [`packages/trpc`](packages/trpc): tRPC routes and context definitions
- [`packages/theme`](packages/theme): Theme definition
- [`packages/web-ui`](packages/web-ui): React components for web app
- [`packages/web-forms`](packages/web-forms): React form-specific components for forms app
- [`packages/web-locales`](packages/web-locales): Locale translations for web app
- [`packages/web-storage`](packages/web-storage): Storage utilities for web app
- [`packages/mobile/ui`](packages/mobile/ui): React Native components for mobile app
- [`packages/mobile/forms`](packages/mobile/forms): React Native form-specific components for forms app
- [`packages/mobile/locales`](packages/mobile/locales): Locale translations for mobile app
- [`packages/mobile/storage`](packages/mobile/storage): Storage utilities for mobile app
- [`packages/eslint-config-custom`](packages/eslint-config-custom): Shared eslint config
- [`packages/stylelint-config-custom`](packages/stylelint-config-custom): Shared stylelint config
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

### Setup database

```bash
# Copy env file
cp packages/database/.env.example packages/database/.env

# Run database
docker compose up

# Generate Prisma client
pnpm -F database generate

# If wanted, generate example data
pnpm -F database db:seed
```

## Available scripts

### Run apps

```bash
pnpm dev

# Running a single app and its deps
pnpm dev:web
pnpm dev:mobile
```

### Run storybook

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

### Build all

```bash
pnpm build
```

### Lint all

```bash
pnpm lint

# To fix lint
pnpm lint:fix

# For file names
pnpm lint:ls

# To only apply to root
pnpm lint:root
pnpm lint:root:fix

# Fix lint on staged files
pnpm lint:staged
```

### Format

```bash
pnpm format

# To fix format
pnpm format:fix
```

### Cleanup files

```bash
pnpm yeet
```
