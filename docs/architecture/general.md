# General architecture

## Software architecture

TODO: Missing documentation

## File structure

For more info, see Turborepo file structure.

- `apps`: Running apps
  - `web`: Web app (see [its docs](./apps/web.md))
  - `mobile`: Mobile app (see [its docs](./apps/mobile.md))
- `docs`: Project documentation
- `packages`: Running apps
  - `trpc`: tRPC routes and context definitions (see [its docs](./packages/trpc.md))
  - `web-ui`: Web UI library (see [its docs](./packages/web-ui.md))
  - `mobile-ui`: Mobile UI library (see [its docs](./packages/mobile-ui.md))
  - `theme`: Theme (color palette) definition (see [its docs](./packages/theme.md))
  - `eslint-config-custom`: Set of eslint configs for given technologies
  - `tesconfig`: Set of TypeScript configs for given technologies
