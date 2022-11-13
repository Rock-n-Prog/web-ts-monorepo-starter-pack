import * as React from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { Stack, stackDirections } from 'mobile-ui/components/layouts';
import { Body1 } from 'mobile-ui/components/typography';

storiesOf('Layouts/Stack', module)
  .add('Column', () => (
    <Stack direction={select('Direction', stackDirections, 'column')} alignCenter={boolean('alignCenter', false)}>
      <Body1>First child</Body1>
      <Body1>Second child</Body1>
      <Body1>Third child</Body1>
    </Stack>
  ))
  .add('Column, aligned center', () => (
    <Stack direction={select('Direction', stackDirections, 'column')} alignCenter={boolean('alignCenter', true)}>
      <Body1>First child</Body1>
      <Body1>Second child</Body1>
      <Body1>Third child</Body1>
    </Stack>
  ))
  .add('Row', () => (
    <Stack direction={select('Direction', stackDirections, 'row')} alignCenter={boolean('alignCenter', false)}>
      <Body1>First child</Body1>
      <Body1>Second child</Body1>
      <Body1>Third child</Body1>
    </Stack>
  ))
  .add('Row, aligned center', () => (
    <Stack direction={select('Direction', stackDirections, 'row')} alignCenter={boolean('alignCenter', true)}>
      <Body1>First child</Body1>
      <Body1>Second child</Body1>
      <Body1>Third child</Body1>
    </Stack>
  ));
