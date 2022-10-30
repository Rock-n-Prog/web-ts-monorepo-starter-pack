import * as React from 'react';
import { Flex, FlexProps } from '../Flex';
import { Body1 } from '../../typography';

const config = {
  title: 'Layout/Flex',
  component: Flex,
};

function generateChildren(amount: number) {
  return Array.from(Array(amount).keys()).map(i => <Body1 key={i}>{`Child ${i}`}</Body1>);
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

const JustifyContentStart = Template.bind({}) as any;
JustifyContentStart.args = {
  children: generateChildren(3),
  justifyContent: 'start',
};

const JustifyContentCenter = Template.bind({}) as any;
JustifyContentCenter.args = {
  children: generateChildren(3),
  justifyContent: 'center',
};

const JustifyContentEnd = Template.bind({}) as any;
JustifyContentEnd.args = {
  children: generateChildren(3),
  justifyContent: 'end',
};

const MarginXXS = Template.bind({}) as any;
MarginXXS.args = {
  children: generateChildren(3),
  margin: 'xxs',
};

const MarginXS = Template.bind({}) as any;
MarginXS.args = {
  children: generateChildren(3),
  margin: 'xs',
};

const MarginS = Template.bind({}) as any;
MarginS.args = {
  children: generateChildren(3),
  margin: 's',
};

const MarginM = Template.bind({}) as any;
MarginM.args = {
  children: generateChildren(3),
  margin: 'm',
};

const MarginL = Template.bind({}) as any;
MarginL.args = {
  children: generateChildren(3),
  margin: 'l',
};

const MarginXL = Template.bind({}) as any;
MarginXL.args = {
  children: generateChildren(3),
  margin: 'xl',
};

export default config;
export {
  Basic,
  RowDirection,
  ColumnDirection,
  JustifyContentStart,
  JustifyContentCenter,
  JustifyContentEnd,
  MarginXXS,
  MarginXS,
  MarginS,
  MarginM,
  MarginL,
  MarginXL,
};
