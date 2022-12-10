# General architecture

## Software architecture

**Diagrams might not work in GitHub Pages. If that's the case, see them
[here](https://github.com/Rock-n-Prog/web-ts-monorepo-starter-pack/blob/main/docs/architecture/general.md).**

### Components architecture

```mermaid
graph TD;
  apps-web((Web App))
  apps-mobile((Mobile App))
  apps-mobile-ui-showcase((Mobile UI Showcase App))
  packages-web-ui(Web UI Package)
  component-nextjs-app([Next.js App])
  component-edge-functions([Edge Functions])
  component-expo-app([Expo App])
  component-storybook-web-app([Storybook Web App])
  component-expo-ui-showcase-app([Expo UI Showcase App])
  component-db[(Database)]

  subgraph WEB
    subgraph WEB-UI
      apps-web --> |Deploys into| component-nextjs-app
      apps-web -.-> |Uses| packages-web-ui
      packages-web-ui --> |Deploys into| component-storybook-web-app
    end

    subgraph WEB-API
      apps-web --> |Deploys into| component-edge-functions
      component-nextjs-app -.-> |Communicates to| component-edge-functions
      component-edge-functions -.-> |Communicates to| component-db
    end
  end

  subgraph MOBILE
    apps-mobile --> |Deploys into| component-expo-app
    component-expo-app -.-> |Communicates to| component-edge-functions
    apps-mobile-ui-showcase --> |Deploys into| component-expo-ui-showcase-app
  end
```

### Packages architecture

```mermaid
graph TD;
  apps-web((Web App))
  apps-mobile((Mobile App))
  apps-mobile-ui-showcase((Mobile UI Showcase App))
  packages-db(DB Package)
  packages-api(API Package)
  packages-theme(Theme Package)
  packages-web-ui(Web UI Package)
  packages-web-forms(Web Forms Package)
  packages-web-locales(Web Locales Package)
  packages-web-storage(Web Storage Package)
  packages-mobile-ui(Mobile UI Package)
  packages-mobile-forms(Mobile Forms Package)
  packages-mobile-locales(Mobile Locales Package)
  packages-mobile-storage(Mobile Storage Package)

  subgraph WEB
    subgraph WEB-UI
      apps-web -.-> |Uses| packages-web-ui
      apps-web -.-> |Uses| packages-web-forms
      apps-web -.-> |Uses| packages-web-locales
      apps-web -.-> |Uses| packages-web-storage
      packages-web-forms -.-> |Uses| packages-web-ui
      packages-web-ui -.-> |Uses| packages-web-storage
    end

    subgraph WEB-API
      apps-web -.-> |Uses| packages-api
      packages-api -.-> |Uses| packages-db
    end
  end

  subgraph MOBILE
    apps-mobile -.-> |Uses| packages-mobile-ui
    apps-mobile -.-> |Uses| packages-mobile-forms
    apps-mobile -.-> |Uses| packages-mobile-locales
    apps-mobile -.-> |Uses| packages-mobile-storage
    apps-mobile-ui-showcase -.-> |Uses| packages-mobile-ui
    packages-mobile-forms -.-> |Uses| packages-mobile-ui
    packages-mobile-ui -.-> |Uses| packages-mobile-storage
    packages-mobile-locales -.-> |Uses| packages-mobile-storage
  end

  packages-web-ui -.-> |Uses| packages-theme
  packages-mobile-ui -.-> |Uses| packages-theme
```

## File structure

For more info, see Turborepo file structure.

- `.github`: GitHub repo config and workflows
- `.husky`: Pre-commit hook config
- `apps`: Running apps
  - `web`: Web app (see [its docs](./apps/web.md))
  - `mobile`: Mobile app (see [its docs](./apps/mobile.md))
  - `mobile-ui-showcase`: Mobile UI Showcase app (see [its docs](./apps/mobile-ui-showcase.md))
- `docs`: Project documentation
- `packages`: Libraries
  - `db`: Prisma schema and client definitions (see [its docs](./packages/db.md))
  - `api`: tRPC routes and context definitions (see [its docs](./packages/api.md))
  - `theme`: Theme (color palette) definition (see [its docs](./packages/theme.md))
  - `web`: Web libraries
    - `forms`: Web forms library (see [its docs](./packages/web/forms.md))
    - `locales`: Web translations library (see [its docs](./packages/web/locale.md))
    - `storage`: Web storage library (see [its docs](./packages/web/storage.md))
  - `web-ui`: Web UI library (see [its docs](./packages/web-ui.md))
  - `mobile`: Mobile libraries
    - `ui`: Mobile UI library (see [its docs](./packages/mobile/ui.md))
    - `forms`: Mobile forms library (see [its docs](./packages/mobile/forms.md))
    - `locales`: Mobile translations library (see [its docs](./packages/mobile/locales.md))
    - `storage`: Mobile storage library (see [its docs](./packages/mobile/storage.md))
  - `config`: Shared config
    - `eslint`: Set of eslint configs for given technologies
    - `stylelint`: Set of stylelint configs for given technologies
    - `tsconfig`: Set of TypeScript configs for given technologies
