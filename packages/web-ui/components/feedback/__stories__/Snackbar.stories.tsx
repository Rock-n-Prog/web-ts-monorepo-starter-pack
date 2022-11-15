import * as React from 'react';
import type { SnackbarProps } from '../Snackbar';
import { Snackbar } from '../Snackbar';
import { SnackbarProvider } from '../../../contexts/SnackbarProvider';
import { Button } from '../../inputs';
import { useSnackbarContext } from '../../../hooks/useSnackbarContext';

const config = {
  title: 'Feedback/Snackbar',
  component: Snackbar,
};

function InnerTemplate(props: SnackbarProps) {
  const { showSnackbar } = useSnackbarContext();
  const [number, setNumber] = React.useState(1);

  function handleClick() {
    showSnackbar({ ...props, text: `${props.text} - ${number}` });
    setNumber(number + 1);
  }

  return <Button onClick={handleClick}>Show snackbar</Button>;
}

function Template(props: SnackbarProps) {
  return (
    <SnackbarProvider>
      <InnerTemplate {...props} />
    </SnackbarProvider>
  );
}

const Info = Template.bind({}) as any;
Info.args = {
  text: 'Alert text',
  severity: 'info',
};

const Success = Template.bind({}) as any;
Success.args = {
  text: 'Alert text',
  severity: 'success',
};

const Warning = Template.bind({}) as any;
Warning.args = {
  text: 'Alert text',
  severity: 'warning',
};

const Error = Template.bind({}) as any;
Error.args = {
  text: 'Alert text',
  severity: 'error',
};

export default config;
export { Info, Success, Warning, Error };
