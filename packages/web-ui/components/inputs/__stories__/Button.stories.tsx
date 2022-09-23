import * as React from 'react';
import { Button, ButtonProps } from '../Button';

const config = {
  title: 'Components/Common/Inputs/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
};

function Template(props: ButtonProps) {
  return <Button {...props} />;
}

const Contained = Template.bind({}) as any;
Contained.args = {
  title: 'This appears in the tooltip!',
  children: 'Button text',
  variant: 'contained',
};

const Outlined = Template.bind({}) as any;
Outlined.args = {
  title: 'This appears in the tooltip!',
  children: 'Button text',
  variant: 'outlined',
};

const Text = Template.bind({}) as any;
Text.args = {
  title: 'This appears in the tooltip!',
  children: 'Button text',
  variant: 'text',
};

const Disabled = Template.bind({}) as any;
Disabled.args = {
  title: 'This appears in the tooltip!',
  children: 'Button text',
  disabled: true,
};

export default config;
export { Contained, Outlined, Text, Disabled };
