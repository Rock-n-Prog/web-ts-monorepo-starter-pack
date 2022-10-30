import styled, { css } from "styled-components";
import type { Theme } from '../../styles/theme';
import { Typography } from './Typography';

const InputError = styled.span(
  ({ theme }: { readonly theme: Theme }) => css`
    ${Typography};

    font-size: ${theme.fonts.sizes.s};
    color: ${theme.colors.variants.error.main};
  `,
);

export { InputError };
