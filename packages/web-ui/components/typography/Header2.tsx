import styled, { css } from 'styled-components';
import { Typography } from './Typography';
import { Theme } from '../../styles/theme';

const Header2 = styled.h2(
  ({ theme }: { readonly theme: Theme }) => css`
    ${Typography};

    font-size: ${theme.fonts.sizes.xl};
  `,
);

export { Header2 };
