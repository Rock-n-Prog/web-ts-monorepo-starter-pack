import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { ScreenTitle } from 'mobile-ui/components/typography';

// TODO: Variants as knobs? Might only be possible with addon control
storiesOf('Typography/ScreenTitle', module)
  .add('Basic', () => <ScreenTitle>{text('Children', 'Screen Title')}</ScreenTitle>);
