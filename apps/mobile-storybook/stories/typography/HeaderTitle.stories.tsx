import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { HeaderTitle } from '@acme/mobile-ui/components/typography';

storiesOf('Typography/HeaderTitle', module).add('Basic', () => (
  <HeaderTitle>{text('Children', 'Header Title')}</HeaderTitle>
));
