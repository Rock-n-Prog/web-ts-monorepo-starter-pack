import * as React from 'react';
import { text, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { severities } from '@acme/mobile-ui/types/severity';
import type { SnackbarProps } from '@acme/mobile-ui/components/feedback';
import { Button } from '@acme/mobile-ui/components/inputs';
import { useSnackbarContext } from '@acme/mobile-ui/hooks/useSnackbarContext';
import { SnackbarProvider } from '@acme/mobile-ui/contexts/SnackbarProvider';

type TemplateProps = Omit<SnackbarProps, 'duration'>;

function InnerTemplate(props: TemplateProps) {
  const { showSnackbar } = useSnackbarContext();
  const [number, setNumber] = React.useState(1);

  function handlePress() {
    showSnackbar({ ...props, text: `${props.text} - ${number}` });
    setNumber(number + 1);
  }

  return <Button onPress={handlePress} text="Show snackbar" />;
}

function Template(props: TemplateProps) {
  return (
    <SnackbarProvider>
      <InnerTemplate {...props} />
    </SnackbarProvider>
  );
}

storiesOf('Feedback/Snackbar', module)
  .add('Info', () => (
    <Template text={text('Text', 'Snackbar text')} severity={select('Severity', severities, 'info')} />
  ))
  .add('Success', () => (
    <Template text={text('Text', 'Snackbar text')} severity={select('Severity', severities, 'success')} />
  ))
  .add('Warning', () => (
    <Template text={text('Text', 'Snackbar text')} severity={select('Severity', severities, 'warning')} />
  ))
  .add('Error', () => (
    <Template text={text('Text', 'Snackbar text')} severity={select('Severity', severities, 'error')} />
  ));
