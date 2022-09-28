import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Button } from 'mobile-ui/components/inputs';

// TODO: Variants as knobs? Might only be possible with addon control
storiesOf('Inputs/Button', module)
  .add('Contained', () => (
    <Button
      text={text('Text', 'Button text')}
      variant="contained"
      disabled={boolean('Disabled', false)}
      onPress={action('onPress')}
    />
  ))
  .add('Outlined', () => (
    <Button
      text={text('Text', 'Button text')}
      variant="outlined"
      disabled={boolean('Disabled', false)}
      onPress={action('onPress')}
    />
  ))
  .add('Text', () => (
    <Button
      text={text('Text', 'Button text')}
      variant="text"
      disabled={boolean('Disabled', false)}
      onPress={action('onPress')}
    />
  ))
  .add('Disabled', () => (
    <Button text={text('Text', 'Button text')} disabled={boolean('Disabled', true)} onPress={action('onPress')} />
  ));
