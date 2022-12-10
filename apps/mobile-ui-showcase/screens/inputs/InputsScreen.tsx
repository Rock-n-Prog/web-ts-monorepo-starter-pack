import * as React from 'react';
import { Body1, Title } from '@acme/mobile-ui/components/typography';
import { Screen } from '@acme/mobile-ui/components/layouts';
import { ScrollView } from 'react-native';
import { Button, TextInput } from '@acme/mobile-ui/components/inputs';
import { useSnackbarContext } from '@acme/mobile-ui/hooks/useSnackbarContext';

function InputsScreen() {
  const { showSnackbar } = useSnackbarContext();

  function handleButtonPress() {
    showSnackbar({ text: 'On button press', severity: 'info' });
  }

  function handleTextInputChange(text: string) {
    showSnackbar({ text: `On change text: ${text}`, severity: 'info' });
  }

  return (
    <Screen>
      <ScrollView>
        <Title>Button</Title>
        <Body1>Contained</Body1>
        <Button text="Button text" variant="contained" onPress={handleButtonPress} />
        <Body1>Outlined</Body1>
        <Button text="Button text" variant="outlined" onPress={handleButtonPress} />
        <Body1>Text</Body1>
        <Button text="Button text" variant="text" onPress={handleButtonPress} />
        <Body1>Disabled</Body1>
        <Button text="Button text" disabled onPress={handleButtonPress} />

        <Title>TextInput</Title>
        <Body1>Basic</Body1>
        <TextInput label="Label" placeholder="Label" onChangeText={handleTextInputChange} />
        <Body1>Error</Body1>
        <TextInput label="Label" placeholder="Label" error="error" onChangeText={handleTextInputChange} />
      </ScrollView>
    </Screen>
  );
}

export default InputsScreen;
