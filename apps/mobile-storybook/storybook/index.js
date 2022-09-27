import { getStorybookUI, configure } from '@storybook/react-native';
import './rn-addons';

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
