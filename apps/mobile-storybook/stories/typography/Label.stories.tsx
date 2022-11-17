import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { Label } from '@acme/mobile-ui/components/typography';

storiesOf('Typography/Label', module).add('Basic', () => <Label>{text('Children', 'Title')}</Label>);
