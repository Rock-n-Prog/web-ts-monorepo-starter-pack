import * as React from 'react';
import { View } from 'react-native';
import styled, { css } from 'styled-components/native';
import { Theme } from '../../styles/theme';

const stackDirections = ['row', 'column'] as const;
type StackDirection = typeof stackDirections[number];

type StackProps = {
  readonly children: readonly React.ReactNode[];
  readonly alignCenter?: boolean;
  readonly direction?: StackDirection;
};

function Stack({ children, direction = 'column', alignCenter = true }: StackProps) {
  return (
    <Container $direction={direction} $alignCenter={alignCenter}>
      {children.map((child, key) => (
        <Item key={key} $direction={direction} $isFirst={key === 0}>
          {child}
        </Item>
      ))}
    </Container>
  );
}

type ContainerProps = {
  readonly $direction: StackDirection;
  readonly $alignCenter: boolean;
  readonly theme: Theme;
};

const Container = styled(View)(
  ({ $direction, $alignCenter, theme }: ContainerProps) => css`
    display: flex;
    flex-direction: ${$direction};
    padding: ${theme.spacing.xxs} ${theme.spacing.m};

    ${$alignCenter &&
    `
      ${
        $direction === 'column' &&
        `
        align-items: center;
      `
      }

      ${
        $direction === 'row' &&
        `
        justify-content: center;
      `
      }
    `}
  `,
);

type ItemProps = {
  readonly $direction: StackDirection;
  readonly $isFirst: boolean;
  readonly theme: Theme;
};

const Item = styled(View)(
  ({ $direction, $isFirst, theme }: ItemProps) => css`
    display: flex;

    margin-top: ${!$isFirst && $direction === 'column' ? theme.spacing.s : 0};
    margin-left: ${!$isFirst && $direction === 'row' ? theme.spacing.s : 0};
  `,
);

export { Stack, stackDirections };
