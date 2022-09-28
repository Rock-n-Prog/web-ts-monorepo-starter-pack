import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { ScreenTitle } from 'mobile-ui/components/typography';
import CenterView from '../CenterView';

// TODO: Variants as knobs? Might only be possible with addon control
storiesOf('Typography/ScreenTitle', module)
  // TODO: Center view in preview.js?
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Basic', () => <ScreenTitle>{text('Children', 'Screen Title')}</ScreenTitle>);
