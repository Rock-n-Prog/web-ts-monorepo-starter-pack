import * as React from 'react';
import { Flex, FlexProps } from "../Flex";
import { Body1 } from "../../typography";

const config = {
  title: 'Layout/Flex',
  component: Flex,
};

function generateChildren(amount: number) {
  return Array.from(Array(amount).keys()).map((i) => <Body1 key={i}>{`Child ${i}`}</Body1>);
}

function Template(props: FlexProps) {
  return <Flex {...props} />;
}

const Basic = Template.bind({}) as any;
Basic.args = {
  children: generateChildren(3),
};

const RowDirection = Template.bind({}) as any;
RowDirection.args = {
  children: generateChildren(3),
  direction: 'row',
};

const ColumnDirection = Template.bind({}) as any;
ColumnDirection.args = {
  children: generateChildren(3),
  direction: 'column',
};

export default config;
export { Basic, RowDirection, ColumnDirection };
