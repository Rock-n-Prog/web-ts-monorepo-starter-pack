import { getStorybookUI, configure } from '@storybook/react-native';
// import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';
// import { withKnobs } from '@storybook/addon-knobs';
import './rn-addons';

// TODO: Configure same addons as web-ui
// addDecorator(withKnobs);

// TODO: Use @storybook/react-native-server (helps development)
// TODO: Dark mode?
// TODO: Toolbar addon that switches current theme?
configure(() => {
  require('./stories');
}, module);

const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
});

export default StorybookUIRoot;
