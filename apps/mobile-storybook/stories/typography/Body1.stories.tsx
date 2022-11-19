import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { Body1 } from '@acme/mobile-ui/components/typography';

storiesOf('Typography/Body1', module).add('Basic', () => <Body1>{text('Children', 'Body 1')}</Body1>);
