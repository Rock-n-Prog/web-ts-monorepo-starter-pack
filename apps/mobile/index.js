/* eslint-disable */
import { registerRootComponent } from 'expo';
import App from './App';

// index.js has to be placed next to package.json for build to work

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
