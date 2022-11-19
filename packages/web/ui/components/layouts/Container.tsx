import styled, { css } from 'styled-components';
import type { Theme } from '../../styles/theme';

const breakpointsToMaxWidth: Record<keyof Theme['breakpoints'], string> = {
  s: '33.75rem', // 540px
  m: '45rem', // 720px
  l: '60rem', // 960px
  xl: '71.25rem', // 1140px
  xxl: '82.5rem', // 1320px
};

const Container = styled.div<{ readonly theme: Theme }>(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin: auto;

    @media (min-width: ${theme.breakpoints.s}) {
      max-width: ${breakpointsToMaxWidth.s};
    }

    @media (min-width: ${theme.breakpoints.m}) {
      max-width: ${breakpointsToMaxWidth.m};
    }

    @media (min-width: ${theme.breakpoints.l}) {
      max-width: ${breakpointsToMaxWidth.l};
    }

    @media (min-width: ${theme.breakpoints.xl}) {
      max-width: ${breakpointsToMaxWidth.xl};
    }

    @media (min-width: ${theme.breakpoints.xxl}) {
      max-width: ${breakpointsToMaxWidth.xxl};
    }
  `,
);

export { Container };
