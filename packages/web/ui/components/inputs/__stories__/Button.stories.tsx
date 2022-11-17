import * as React from 'react';
import { Button, ButtonProps } from '../Button';

const config = {
  title: 'Inputs/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
};

function Template(props: ButtonProps) {
  return <Button {...props} />;
}

const Contained = Template.bind({}) as any;
Contained.args = {
  children: 'Button text',
  variant: 'contained',
  disabled: false,
};

const Outlined = Template.bind({}) as any;
Outlined.args = {
  children: 'Button text',
  variant: 'outlined',
  disabled: false,
};

const Text = Template.bind({}) as any;
Text.args = {
  children: 'Button text',
  variant: 'text',
  disabled: false,
};

const Disabled = Template.bind({}) as any;
Disabled.args = {
  children: 'Button text',
  disabled: true,
};

const WithTooltip = Template.bind({}) as any;
WithTooltip.args = {
  tooltipText: 'This appears in the tooltip!',
  children: 'Button text',
  disabled: false,
};

export default config;
export { Contained, Outlined, Text, Disabled, WithTooltip };
