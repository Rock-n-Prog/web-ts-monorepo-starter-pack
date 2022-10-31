import * as React from 'react';
import type { TextFieldProps } from '../TextInput';
import { TextInput } from '../TextInput';

const config = {
  title: 'Inputs/TextInput',
  component: TextInput,
  argTypes: { onClick: { action: 'clicked' }, onBlur: { action: 'blurred' } },
};

function Template(props: TextFieldProps) {
  return <TextInput {...props} />;
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
