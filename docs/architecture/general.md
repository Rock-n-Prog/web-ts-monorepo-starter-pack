# General architecture

## Software architecture

TODO: Missing documentation

## File structure

For more info, see Turborepo file structure.

- `.github`: GitHub repo config and workflows
- `.husky`: Pre-commit hook config
- `apps`: Running apps
  - `web`: Web app (see [its docs](./apps/web.md))
  - `mobile`: Mobile app (see [its docs](./apps/mobile.md))
- `docs`: Project documentation
- `packages`: Libraries
  - `database`: Prisma schema and client definitions (see [its docs](./packages/database.md))
  - `trpc`: tRPC routes and context definitions (see [its docs](./packages/trpc.md))
  - `theme`: Theme (color palette) definition (see [its docs](./packages/theme.md))
  - `web-ui`: Web UI library (see [its docs](./packages/web-ui.md))
  - `web-forms`: Web forms library (see [its docs](./packages/web-forms.md))
  - `web-locales`: Web translations library (see [its docs](./packages/web-locale.md))
  - `web-storage`: Web storage library (see [its docs](./packages/web-storage.md))
  - `mobile-ui`: Mobile UI library (see [its docs](./packages/mobile-ui.md))
  - `mobile-forms`: Mobile forms library (see [its docs](./packages/mobile-forms.md))
  - `mobile-locales`: Mobile translations library (see [its docs](./packages/mobile-locales.md))
  - `mobile-storage`: Mobile storage library (see [its docs](./packages/mobile-storage.md))
  - `stylelint-config-custom`: Set of stylelint configs for given technologies
  - `eslint-config-custom`: Set of eslint configs for given technologies
  - `tsconfig`: Set of TypeScript configs for given technologies
