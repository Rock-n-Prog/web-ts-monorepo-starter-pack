import styled, { css } from 'styled-components';
import { Typography } from './Typography';
import { Theme } from '../../styles/theme';

const Header1 = styled.h1(
  ({ theme }: { readonly theme: Theme }) => css`
    ${Typography};

    font-size: ${theme.fonts.sizes.xxl};
  `,
);

export { Header1 };
