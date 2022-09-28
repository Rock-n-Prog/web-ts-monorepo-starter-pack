import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import './rn-addons';
import { StoryContainer } from '../components/StoryContainer';

addDecorator(withKnobs);
addDecorator((Story) => (
  <StoryContainer>
    <Story />
  </StoryContainer>
));

// TODO: Get @storybook/react-native-server to work (helps development) -> Stories not showing, addons needing to be commented
//       Update: lol might not be that simple -> https://github.com/storybookjs/react-native/issues/55
//       Might be for a future upgrade
configure(() => {
  require('../stories');
}, module);

const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
});

export default StorybookUIRoot;
