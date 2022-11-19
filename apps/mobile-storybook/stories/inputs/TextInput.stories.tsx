import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { TextInput } from '@acme/mobile-ui/components/inputs';

storiesOf('Inputs/TextInput', module)
  .add('Basic', () => (
    <TextInput
      value={text('Value', '')}
      label={text('Label', 'Label')}
      placeholder={text('Placeholder', 'Placeholder')}
      editable={boolean('Disabled', false)}
      multiline={boolean('Multiline', false)}
      onChangeText={action('onChangeText')}
    />
  ))
  .add('WithError', () => (
    <TextInput
      value={text('Value', '')}
      label={text('Label', 'Label')}
      error={text('Error', 'Error')}
      placeholder={text('Placeholder', 'Placeholder')}
      editable={boolean('Disabled', false)}
      multiline={boolean('Multiline', false)}
      onChangeText={action('onChangeText')}
    />
  ));
