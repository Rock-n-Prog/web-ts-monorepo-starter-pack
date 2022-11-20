# Features

Here's a non-exhaustive list of everything this base app has to offer:

- Heavily detailed documentation
- Monorepo setup with [Turborepo](https://turbo.build) and [pnpm](https://pnpm.io)
- [Next.js](https://nextjs.org) ([React](https://reactjs.org)) web app ([`apps/web`](../apps/web))
- [Expo](https://expo.dev) ([React Native](https://reactnative.dev)) mobile app ([`apps/mobile`](../apps/mobile))
- Type-safe end-to-end communication between layers
  - UI-API: [tRPC](https://trpc.io), bundled with [`react-query`](https://tanstack.com/query/v4)
  - API-DB: [Prisma](https://www.prisma.io), which also handles schema definitions and migrations
- [Docker](https://www.docker.com), with [Docker Compose](https://docs.docker.com/compose) to run the local
  [MySQL](https://www.mysql.com) database
- Theming
  - Defined design system (UI library)
    - web: [`packages/web-ui`](../packages/web-ui)
    - mobile: [`packages/mobile/ui`](../packages/mobile/ui)
    - Contains example for snackbar requests handling
  - Defined theme, with [styled-components](https://www.styled-components.com) and automatic theme detection
  - Automatic theme mode detection using client storage
  - Theme handling contexts and hooks
- Translations ([i18next](https://www.i18next.com))
  - Setup for translation namespaces
  - Automatic locale detection using client storage
  - Server-side rendering examples with [`next-i18next`](https://github.com/i18next/next-i18next)
  - Locale handling contexts and hooks
- Forms, with react-hook-forms and zod resolvers
  - Form handling and validation through [React Hook Form](https://react-hook-form.com) and
    [zod resolvers](https://github.com/react-hook-form/resolvers)
  - Reusing the zod schemas from the API
  - Separation of concerns between inputs and form fields
    - web: [`packages/web/forms`](../packages/web/forms)
    - mobile: [`packages/mobile/forms`](../packages/mobile/forms)
- Navigation
  - Defined routes for both web and mobile apps
  - Example of path params usage
- Workflows (CI), with [GitHub Actions](), scoped for each app and package
- Pre-commit hooks with [Husky](https://typicode.github.io/husky) for code formatting using
  [`lint-staged`](https://github.com/okonet/lint-staged)
- [Storybook](https://storybook.js.org) setup to showcase the design system
  - web: [`packages/web-ui`](../packages/web-ui)
  - mobile: [`apps/mobile-storybook`](../apps/mobile-storybook)
- Well-defined linter / formatter rules
  - [`eslint`](https://eslint.org)
  - [`prettier`](https://prettier.io)
  - [`stylelint`](https://stylelint.io)
  - [`ls-lint`](https://ls-lint.org/1.x/configuration/the-basics.html)
- Base FP-oriented config for TS and linters ([`packages/config`]())

## Okay, but what isn't in here?

- Deployment setup
  - We don't actually want to deploy this boilerplate. It could be a good example, but dealing with cloud operations is
    out of scope for now.
- Infrastructure as code
  - Same as deployment setup
