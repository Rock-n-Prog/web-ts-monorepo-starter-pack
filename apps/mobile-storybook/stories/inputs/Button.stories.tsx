import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { Button, buttonVariants } from '@acme/mobile-ui/components/inputs';

storiesOf('Inputs/Button', module)
  .add('Contained', () => (
    <Button
      text={text('Text', 'Button text')}
      variant={select('Variant', buttonVariants, 'contained')}
      disabled={boolean('Disabled', false)}
      onPress={action('onPress')}
    />
  ))
  .add('Outlined', () => (
    <Button
      text={text('Text', 'Button text')}
      variant={select('Variant', buttonVariants, 'outlined')}
      disabled={boolean('Disabled', false)}
      onPress={action('onPress')}
    />
  ))
  .add('Text', () => (
    <Button
      text={text('Text', 'Button text')}
      variant={select('Variant', buttonVariants, 'text')}
      disabled={boolean('Disabled', false)}
      onPress={action('onPress')}
    />
  ))
  .add('Disabled', () => (
    <Button text={text('Text', 'Button text')} disabled={boolean('Disabled', true)} onPress={action('onPress')} />
  ));
