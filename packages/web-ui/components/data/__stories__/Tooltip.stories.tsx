import * as React from 'react';
import { Body1 } from '../../typography';
import type { TooltipProps } from '../Tooltip';
import { Tooltip } from '../Tooltip';

const config = {
  title: 'Data/Tooltip',
  component: Tooltip,
};

function Template(props: TooltipProps) {
  return <Tooltip {...props} />;
}

const Basic = Template.bind({}) as any;
Basic.args = {
  title: 'This appears in the tooltip!',
  children: <Body1>Hover me!</Body1>,
};

export default config;
export { Basic };
