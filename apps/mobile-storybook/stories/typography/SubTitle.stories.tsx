import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { SubTitle } from 'mobile-ui/components/typography';

storiesOf('Typography/SubTitle', module).add('Basic', () => <SubTitle>{text('Children', 'Sub Title')}</SubTitle>);
