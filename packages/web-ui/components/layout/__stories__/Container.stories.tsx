import * as React from 'react';
import { Container } from '../Container';
import { Body1 } from '../../typography';

const config = {
  title: 'Layout/Container',
  component: Container,
};

function Template(props: React.PropsWithChildren) {
  return <Container {...props} />;
}

const Basic = Template.bind({}) as any;
Basic.args = {
  children: <Body1>Content</Body1>,
};

export default config;
export { Basic };
