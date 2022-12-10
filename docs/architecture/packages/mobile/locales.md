# Mobile Locales

Library is located at [`packages/mobile/locales`](../../../../packages/mobile/locales).

This library is used by a mobile app. For more info, read [its docs](../../apps/mobile.md).

This package uses:

- [`packages/mobile/storage`](./storage.md): Storage utilities

## Software architecture

This library contains JSON files for translations and other utilities. File structure explains pretty well the software
architecture.

## File structure

- `contexts`: Context providers
- `hooks`: Hooks
- `plugins`: i18n plugins
- `translations`: All locales translations
  - `en`: Translations in English
  - `fr`: Translations in French
- `types`: Type definitions
- `utils`: Utilities
