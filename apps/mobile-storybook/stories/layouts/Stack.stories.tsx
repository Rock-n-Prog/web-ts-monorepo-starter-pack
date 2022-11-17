import * as React from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { Stack, stackDirections, stackGaps } from '@acme/mobile-ui/components/layouts';
import { Body1 } from '@acme/mobile-ui/components/typography';

storiesOf('Layouts/Stack', module)
  .add('Column', () => (
    <Stack
      direction={select('Direction', stackDirections, 'column')}
      gap={select('Gap', stackGaps, 's')}
      alignCenter={boolean('alignCenter', false)}
    >
      <Body1>First child</Body1>
      <Body1>Second child</Body1>
      <Body1>Third child</Body1>
    </Stack>
  ))
  .add('Column, aligned center', () => (
    <Stack
      direction={select('Direction', stackDirections, 'column')}
      gap={select('Gap', stackGaps, 's')}
      alignCenter={boolean('alignCenter', true)}
    >
      <Body1>First child</Body1>
      <Body1>Second child</Body1>
      <Body1>Third child</Body1>
    </Stack>
  ))
  .add('Row', () => (
    <Stack
      direction={select('Direction', stackDirections, 'row')}
      gap={select('Gap', stackGaps, 's')}
      alignCenter={boolean('alignCenter', false)}
    >
      <Body1>First child</Body1>
      <Body1>Second child</Body1>
      <Body1>Third child</Body1>
    </Stack>
  ))
  .add('Row, aligned center', () => (
    <Stack
      direction={select('Direction', stackDirections, 'row')}
      gap={select('Gap', stackGaps, 's')}
      alignCenter={boolean('alignCenter', true)}
    >
      <Body1>First child</Body1>
      <Body1>Second child</Body1>
      <Body1>Third child</Body1>
    </Stack>
  ));
