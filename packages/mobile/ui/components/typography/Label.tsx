import styled, { css } from 'styled-components/native';
import type { Theme } from '../../styles/theme';
import { Typography } from './Typography';

const Label = styled(Typography)(
  ({ theme }: { readonly theme: Theme }) => css`
    font-size: ${theme.fonts.sizes.s};
  `,
);

export { Label };
