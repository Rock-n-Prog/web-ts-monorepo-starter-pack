import { registerRootComponent } from 'expo';
import App from './App';

// TODO: This file might not be needed with package.json: "main": "node_modules/expo/AppEntry.js"

// index.js has to be placed next to package.json for build to work

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
