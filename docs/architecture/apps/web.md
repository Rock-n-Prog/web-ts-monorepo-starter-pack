# Web

App is located at [`apps/web`](../../../apps/web).

This app uses shared packages. For more info, read their docs:

- [`trpc`](../packages/api.md)
- [`web-ui`](../packages/web-ui.md)
- [`web/forms`](../packages/web/forms.md)
- [`web/locales`](../packages/web/locales.md)

## Software architecture

A simple Next.js (React) app built in TypeScript. File structure explains pretty well the software architecture.

TODO: How the frontend communicates with the backend

## File structure

For more info, see Next.js file structure.

- `components`: UI Components
- `contexts`: Context providers
- `hooks`: Hooks
- `pages`: Pages, routing automatically handled by Next.js
  - `_app.page.tsx`: Application (wrapped by providers)
  - `/**/*.page.tsx`: Pages of the application
- `utils`: Utility functions
