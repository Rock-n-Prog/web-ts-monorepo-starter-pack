import styled from 'styled-components/native';
import { fonts } from '../../styles/fonts';
import { Typography } from './Typography';

const ScreenTitle = styled(Typography)`
  font-size: ${fonts.sizes.l};
  font-weight: ${fonts.weights.bold};
`;

export { ScreenTitle };
