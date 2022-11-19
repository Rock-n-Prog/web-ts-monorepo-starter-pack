import styled, { css } from 'styled-components/native';
import type { Theme } from '../../styles/theme';
import { Typography } from './Typography';

const ErrorMessage = styled(Typography)(
  ({ theme }: { readonly theme: Theme }) => css`
    font-size: ${theme.fonts.sizes.xs};
    color: ${theme.colors.variants.error.main};
  `,
);

export { ErrorMessage };
