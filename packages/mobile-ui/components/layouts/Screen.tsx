import styled, { css } from 'styled-components/native';
import { spacing } from '../../styles/spacing';
import { Theme } from "../../styles/theme";

const Screen = styled.View(
  ({ theme }: { readonly theme: Theme }) => css`
    background-color: ${theme.background};
    padding: ${spacing.l};
    flex: 1;
    align-items: center;
  `,
);

export { Screen };