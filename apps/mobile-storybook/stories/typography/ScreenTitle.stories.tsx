import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { ScreenTitle } from 'mobile-ui/components/typography';

storiesOf('Typography/ScreenTitle', module).add('Basic', () => (
  <ScreenTitle>{text('Children', 'Screen Title')}</ScreenTitle>
));
