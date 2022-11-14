import styled, { css } from 'styled-components';
import type { Theme } from '../../styles/theme';
import { Typography } from './Typography';

// TODO: How about "ErrorText"? Same for web-ui
const InputError = styled(Typography)(
  ({ theme }: { readonly theme: Theme }) => css`
    font-size: ${theme.fonts.sizes.xs};
    color: ${theme.colors.variants.error.main};
  `,
);

export { InputError };
