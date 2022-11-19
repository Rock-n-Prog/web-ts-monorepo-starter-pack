import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { Title } from '@acme/mobile-ui/components/typography';

storiesOf('Typography/Title', module).add('Basic', () => <Title>{text('Children', 'Title')}</Title>);
