import * as React from 'react';
import { Header2 } from '../Header2';

const config = {
  title: 'Typography/Header2',
  component: Header2,
};

function Template({ ...args }) {
  return <Header2 {...args} />;
}

const Basic = Template.bind({}) as any;
Basic.args = {
  children: 'Header 2',
};

export default config;
export { Basic };
