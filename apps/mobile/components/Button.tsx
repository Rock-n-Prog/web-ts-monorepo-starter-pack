import * as React from 'react';
import { Button as RNButton, ButtonProps } from 'react-native';

function Button(props: ButtonProps) {
  return <RNButton {...props} />;
}

export default Button;