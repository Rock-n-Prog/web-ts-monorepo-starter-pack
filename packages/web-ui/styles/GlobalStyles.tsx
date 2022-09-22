import { createGlobalStyle, css } from 'styled-components';
import { Theme } from './theme';

const GlobalStyle = createGlobalStyle(
  ({ theme }: { readonly theme: Theme }) => css`
    html,
    body {
      margin: 0;
      padding: 0;
      font-family: sans-serif;
      background-color: ${theme.colors.background};
    }
    a {
      color: inherit;
      text-decoration: none;
    }
    * {
      box-sizing: border-box;
    }
  `,
);

export default GlobalStyle;
