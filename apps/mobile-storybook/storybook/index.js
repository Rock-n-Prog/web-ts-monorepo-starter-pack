import { getStorybookUI, configure } from '@storybook/react-native';
// import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';
// import { withKnobs } from '@storybook/addon-knobs';
import './rn-addons';

// TODO: Configure same addons as web-ui
// addDecorator(withKnobs);

// TODO: Get @storybook/react-native-server to work (helps development) -> Stories not showing, addons needing to be commented
//       Update: lol might not be that simple -> https://github.com/storybookjs/react-native/issues/55
// TODO: Dark mode?
// TODO: Toolbar addon that switches current theme?
configure(() => {
  require('./stories');
}, module);

const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
});

export default StorybookUIRoot;
