# Web

App is located at [`apps/web`](../../apps/web).

This app uses a UI library. For more info, read [its docs](./web-ui.md).

## Software architecture

A simple Next.js (React) app built in TypeScript. File structure explains pretty well the software architecture.

TODO: How the frontend communicates with the backend

## File structure

For more info, see Next.js file structure.

- `components`: UI Components
  - `common`: Components specific to app (not included in UI library)
- `pages`: Pages, routing automatically handled by Next.js
  - `_app.page.tsx`: Application (wrapped by providers)
  - `/**/*.page.tsx`: Pages of the application
- `server`: Server config and routes
- `utils`: Utility values and functions
