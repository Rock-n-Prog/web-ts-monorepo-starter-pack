import * as React from 'react';
import { View } from 'react-native';
import styled, { css } from "styled-components/native";
import { Theme } from "../../styles/theme";

type StackProps = {
  readonly children: readonly React.ReactNode[];
  readonly alignCenter?: boolean;
};

// TODO: Stories
function Stack({ children, alignCenter = true }: StackProps) {
  return (
    <Container $alignCenter={alignCenter}>
      {children.map((child, key) => (
        <Item key={key} $spaceTop={key !== 0}>{child}</Item>
      ))}
    </Container>
  )
}

type ContainerProps = {
  readonly $alignCenter: boolean;
  readonly theme: Theme;
}

const Container = styled(View)(
  ({ $alignCenter, theme }: ContainerProps) => css`
    display: flex;
    align-items: ${$alignCenter ? 'center' : undefined};
    padding: ${theme.spacing.xxs} ${theme.spacing.m};
  `,
);

type ItemProps = {
  readonly $spaceTop: boolean;
  readonly theme: Theme;
}

const Item = styled(View)(
  ({ $spaceTop, theme }: ItemProps) => css`
    display: flex;
    margin-top: ${$spaceTop ? theme.spacing.s : 0};
  `,
);

export { Stack };
