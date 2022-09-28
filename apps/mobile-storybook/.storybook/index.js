import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import './rn-addons';

addDecorator(withKnobs);

// TODO: Storybook v6? knobs -> controls, context -> toolbar (try same as web-ui)
// TODO: Get @storybook/react-native-server to work (helps development) -> Stories not showing, addons needing to be commented
//       Update: lol might not be that simple -> https://github.com/storybookjs/react-native/issues/55
//       Might be for a future upgrade
// TODO: Dark mode?
// TODO: Toolbar addon that switches current theme?
configure(() => {
  require('../stories');
}, module);

const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
});

export default StorybookUIRoot;
