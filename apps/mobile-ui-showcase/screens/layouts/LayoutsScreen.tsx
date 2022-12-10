import * as React from 'react';
import { Body1, Title } from '@acme/mobile-ui/components/typography';
import { Screen, Stack } from '@acme/mobile-ui/components/layouts';
import { ScrollView } from 'react-native';

function LayoutsScreen() {
  return (
    <Screen>
      <ScrollView>
        <Title>Stack</Title>
        <Body1>Column</Body1>
        <Stack direction="column" gap="s" alignCenter={false}>
          <Body1>First child</Body1>
          <Body1>Second child</Body1>
          <Body1>Third child</Body1>
        </Stack>
        <Body1>Column, aligned center</Body1>
        <Stack direction="column" gap="s" alignCenter>
          <Body1>First child</Body1>
          <Body1>Second child</Body1>
          <Body1>Third child</Body1>
        </Stack>
        <Body1>Row</Body1>
        <Stack direction="row" gap="s" alignCenter={false}>
          <Body1>First child</Body1>
          <Body1>Second child</Body1>
          <Body1>Third child</Body1>
        </Stack>
        <Body1>Row, aligned center</Body1>
        <Stack direction="row" gap="s" alignCenter>
          <Body1>First child</Body1>
          <Body1>Second child</Body1>
          <Body1>Third child</Body1>
        </Stack>
      </ScrollView>
    </Screen>
  );
}

export default LayoutsScreen;
