import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Button } from 'mobile-ui/components/inputs';
import CenterView from '../CenterView';

// TODO: Variants as knobs? Might only be possible with addon control
storiesOf('Inputs/Button', module)
  // TODO: Center view in preview.js?
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Contained', () => (
    <Button
      title={text('Text', 'Button text')}
      onPress={action('onPress')}
      variant="contained"
      disabled={boolean('Disabled', false)}
    />
  ))
  .add('Outlined', () => (
    <Button
      title={text('Text', 'Button text')}
      onPress={action('onPress')}
      variant="outlined"
      disabled={boolean('Disabled', false)}
    />
  ))
  .add('Text', () => (
    <Button
      title={text('Text', 'Button text')}
      onPress={action('onPress')}
      variant="text"
      disabled={boolean('Disabled', false)}
    />
  ))
  .add('Disabled', () => (
    <Button title={text('Text', 'Button text')} onPress={action('onPress')} disabled={boolean('Disabled', true)} />
  ));
