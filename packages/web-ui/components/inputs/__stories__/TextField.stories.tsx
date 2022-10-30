import * as React from 'react';
import type { TextFieldProps } from '../TextField';
import { TextField } from '../TextField';

const config = {
  title: 'Inputs/TextField',
  component: TextField,
  argTypes: { onClick: { action: 'clicked' }, onBlur: { action: 'blurred' } },
};

function Template(props: TextFieldProps) {
  return <TextField {...props} />;
}

const Basic = Template.bind({}) as any;
Basic.args = {
  label: 'Label',
  placeholder: 'Placeholder',
};

const WithError = Template.bind({}) as any;
WithError.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  error: 'Some error message'
};

export default config;
export { Basic, WithError };
