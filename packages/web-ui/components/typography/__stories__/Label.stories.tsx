import * as React from 'react';
import { Label } from '../Label';

const config = {
  title: 'Typography/Label',
  component: Label,
};

function Template({ ...args }) {
  return <Label {...args} />;
}

const Basic = Template.bind({}) as any;
Basic.args = {
  children: 'Label',
};

export default config;
export { Basic };
