# Debug app

How to run the app locally, simulating production environment with dev tools.

You will need to link expo-cli to your account first.

\*\*In all the following cases, Metro will link the running app. You should be able to debug using your IDE.

## Web

```bash
pnpm install
pnpm -F mobile dev:web
```

A tab should open in your default browser. Otherwise, click link in console output.

You can use your browser's dev tools and IDE to debug the app. Logs will also be pasted in the console.

## Android

You can either use an Android phone with [Expo Go app](https://expo.dev/client) or an emulator.

### Phone with Expo Go app

Install Expo Go and link the app to your account. You should have access to all EAS builds and local apps running on
your network.

When your PC runs the local app (with `pnpm dev:mobile`), Expo Go can detect it. You can choose this app in Expo Go, or
go to the URL `pnpm dev:mobile` provides and scan the QR code.

### Emulator

TODO: Document Android emulator local run

## iOS

TODO: Document iOS local run
