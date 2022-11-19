import * as React from 'react';
import { Header1 } from '../Header1';

const config = {
  title: 'Typography/Header1',
  component: Header1,
};

function Template({ ...args }) {
  return <Header1 {...args} />;
}

const Basic = Template.bind({}) as any;
Basic.args = {
  children: 'Header 1',
};

export default config;
export { Basic };
