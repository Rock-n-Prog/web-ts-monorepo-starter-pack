import { ButtonProps } from 'react-native';
import Button from "../Button";

export default {
  title: "Components/Button",
  component: Button
};

export const Basic = (args: JSX.IntrinsicAttributes & ButtonProps) => (
  <Button {...args} />
);

Basic.args = {
  text: 'Hello World',
  color: 'purple',
};