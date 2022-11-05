import styled, { css } from 'styled-components';
import type { Theme } from '../../styles/theme';
import { Typography } from './Typography';

const Label = styled.label(
  ({ theme }: { readonly theme: Theme }) => css`
    ${Typography};

    font-size: ${theme.fonts.sizes.s};
  `,
);

export { Label };
