import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';
import { Typography } from './Typography';

const Header2 = styled.h2(
  ({ theme }: { readonly theme: Theme }) => css`
    ${Typography};

    font-size: ${theme.fonts.sizes.xl};
    margin-bottom: ${theme.spacing.xs};
  `,
);

export { Header2 };
