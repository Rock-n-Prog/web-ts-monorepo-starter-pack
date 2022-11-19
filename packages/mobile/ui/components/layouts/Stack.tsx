import * as React from 'react';
import { View } from 'react-native';
import styled, { css } from 'styled-components/native';
import { Theme } from '../../styles/theme';

const stackDirections = ['row', 'column'] as const;
type StackDirection = typeof stackDirections[number];

const stackGaps = ['xxs', 'xs', 's', 'm', 'l', 'xl'] as const;
type StackGap = typeof stackGaps[number];

type StackProps = {
  readonly children: readonly React.ReactNode[];
  readonly direction?: StackDirection;
  readonly gap?: StackGap;
  readonly alignCenter?: boolean;
};

function Stack({ children, direction = 'column', gap = 's', alignCenter = true }: StackProps) {
  return (
    <Container $direction={direction} $alignCenter={alignCenter}>
      {children.map((child, key) => (
        <Item key={key} $direction={direction} $gap={gap} $isFirst={key === 0}>
          {child}
        </Item>
      ))}
    </Container>
  );
}

type ContainerProps = {
  readonly $direction: StackDirection;
  readonly $alignCenter: boolean;
};

const Container = styled(View)(
  ({ $direction, $alignCenter }: ContainerProps) => css`
    display: flex;
    flex-direction: ${$direction};

    ${$alignCenter &&
    `
      ${$direction === 'column' ? `align-items: center;` : `justify-content: center;`}
    `}
  `,
);

type ItemProps = {
  readonly $direction: StackDirection;
  readonly $gap: StackGap;
  readonly $isFirst: boolean;
  readonly theme: Theme;
};

const Item = styled(View)(
  ({ $direction, $gap, $isFirst, theme }: ItemProps) => css`
    display: flex;

    ${$direction === 'column' &&
    `
        width: 100%;
      `}

    ${!$isFirst &&
    `
      ${$direction === 'column' ? `margin-top: ${theme.spacing[$gap]};` : `margin-left: ${theme.spacing[$gap]};`}
    `}
  `,
);

export { Stack, stackDirections, stackGaps };
