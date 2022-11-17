import * as React from 'react';
import { text, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { Alert } from '@acme/mobile-ui/components/feedback';
import { severities } from '@acme/mobile-ui/types/severity';

storiesOf('Feedback/Alert', module)
  .add('Info', () => <Alert text={text('Text', 'Alert text')} severity={select('Severity', severities, 'info')} />)
  .add('Success', () => (
    <Alert text={text('Text', 'Alert text')} severity={select('Severity', severities, 'success')} />
  ))
  .add('Warning', () => (
    <Alert text={text('Text', 'Alert text')} severity={select('Severity', severities, 'warning')} />
  ))
  .add('Error', () => <Alert text={text('Text', 'Alert text')} severity={select('Severity', severities, 'error')} />);
