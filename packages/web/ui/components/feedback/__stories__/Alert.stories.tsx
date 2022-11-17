import * as React from 'react';
import { Alert, AlertProps } from '../Alert';

const config = {
  title: 'Feedback/Alert',
  component: Alert,
};

function Template(props: AlertProps) {
  return <Alert {...props} />;
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
