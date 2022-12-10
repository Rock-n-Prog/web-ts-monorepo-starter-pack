import * as React from 'react';
import { Body1, Title } from '@acme/mobile-ui/components/typography';
import { Alert } from '@acme/mobile-ui/components/feedback';
import { Screen } from '@acme/mobile-ui/components/layouts';
import { useSnackbarContext } from '@acme/mobile-ui/hooks/useSnackbarContext';
import { Button } from '@acme/mobile-ui/components/inputs';
import { Severity } from '@acme/mobile-ui/types/severity';
import { ScrollView } from 'react-native';

function FeedbackScreen() {
  const { showSnackbar } = useSnackbarContext();
  const [number, setNumber] = React.useState(1);

  function handlePress(severity: Severity) {
    showSnackbar({ text: `Snackbar #${number}`, severity });
    setNumber(number + 1);
  }

  return (
    <Screen>
      <ScrollView>
        <Title>Alert</Title>
        <Body1>Info</Body1>
        <Alert text="Alert text" severity="info" />
        <Body1>Success</Body1>
        <Alert text="Alert text" severity="success" />
        <Body1>Warning</Body1>
        <Alert text="Alert text" severity="warning" />
        <Body1>Error</Body1>
        <Alert text="Alert text" severity="error" />

        <Title>Snackbar</Title>
        <Body1>Info</Body1>
        <Button text="Show snackbar" onPress={() => handlePress('info')} />
        <Body1>Success</Body1>
        <Button text="Show snackbar" onPress={() => handlePress('success')} />
        <Body1>Warning</Body1>
        <Button text="Show snackbar" onPress={() => handlePress('warning')} />
        <Body1>Error</Body1>
        <Button text="Show snackbar" onPress={() => handlePress('error')} />
      </ScrollView>
    </Screen>
  );
}

export default FeedbackScreen;
