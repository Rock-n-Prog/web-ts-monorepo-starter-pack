import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import './rn-addons';
import { StoryContainer } from '../components/StoryContainer';

addDecorator(withKnobs);
addDecorator(Story => (
  <StoryContainer>
    <Story />
  </StoryContainer>
));

configure(() => {
  require('../stories');
}, module);

const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
});

export default StorybookUIRoot;
