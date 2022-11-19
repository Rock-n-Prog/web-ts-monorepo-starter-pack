import styled, { css } from 'styled-components';
import type { Theme } from '../../styles/theme';
import { Typography } from './Typography';

const ErrorMessage = styled.span(
  ({ theme }: { readonly theme: Theme }) => css`
    ${Typography};

    font-size: ${theme.fonts.sizes.xs};
    color: ${theme.colors.variants.error.main};

    // Makes input error message take up space, even if not present
    :empty::before {
      content: '';
      display: inline-block;
    }
  `,
);

export { ErrorMessage };
