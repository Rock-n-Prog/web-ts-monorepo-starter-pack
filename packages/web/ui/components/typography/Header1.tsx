import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';
import { Typography } from './Typography';

const Header1 = styled.h1(
  ({ theme }: { readonly theme: Theme }) => css`
    ${Typography};

    font-size: ${theme.fonts.sizes.xxl};
    margin-bottom: ${theme.spacing.s};
  `,
);

export { Header1 };
