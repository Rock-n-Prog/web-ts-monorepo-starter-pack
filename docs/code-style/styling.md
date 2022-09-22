# Styling

We enforce code style with [stylelint for styled-components](https://styled-components.com/docs/tooling#stylelint).
Other than that, some rules are listed here.

## Only styled-components

Supported by linter: **NO**

We do not allow plain CSS or SCSS in this codebase. We exclusively use styled-components to keep everything
style-related centralized.

## Use $ with custom props

Supported by linter: **NO**

When using styled-components, specify custom props with a `$` sign. This makes those props easy to spot and never
override an existing styled-components injected prop.

Incorrect:

```ts
const Container = styled.div<{ active: boolean }>(
  ({ theme, active }) => css`
    border: ${theme.spacing.xs} solid ${active ? theme.colors.border.high : theme.colors.primary};
  `,
);
```

Correct:

```ts
const Container = styled.div<{ $active: boolean }>(
  ({ theme, $active }) => css`
    border: ${theme.spacing.xs} solid ${$active ? theme.colors.border.high : theme.colors.primary};
  `,
);
```

## Inject params once

Supported by linter: **NO**

When using styled-components, always inject params only once, except when used a single time.

Incorrect:

```ts
const Container = styled.div`
  border: ${props => props.theme.spacing.xs} solid ${props => props.theme.colors.border.high};
`;
```

```ts
const Container = styled.div<{ $active: boolean }>`
  border: ${props => props.theme.spacing.xs} solid ${props =>
      props.$active ? props.theme.colors.border.high : props.theme.colors.primary};
`;
```

Correct:

```ts
// Single usage, this is okay
const Container = styled.div`
  color: ${props => props.theme.colors.font.default};
`;
```

```ts
const Container = styled.div(
  ({ theme }) => css`
    border: ${theme.spacing.xs} solid ${theme.colors.border.high};
  `,
);
```

```ts
const Container = styled.div<{ $active: boolean }>(
  ({ theme, $active }) => css`
    border: ${theme.spacing.xs} solid ${$active ? theme.colors.border.high : theme.colors.primary};
  `,
);
```
