import * as React from 'react';
import { Body1, HeaderTitle, Label, Title } from '@acme/mobile-ui/components/typography';
import { Screen } from '@acme/mobile-ui/components/layouts';
import { ScrollView } from 'react-native';

function TypographyScreen() {
  return (
    <Screen>
      <ScrollView>
        <Title>Title</Title>
        <Body1>Body1</Body1>
        <Label>Label</Label>
        <HeaderTitle>HeaderTitle</HeaderTitle>
      </ScrollView>
    </Screen>
  );
}

export default TypographyScreen;
