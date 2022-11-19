# TypeScript

## No classes

Supported by linter: Yes, via
[`functional/no-class`](https://github.com/jonaskello/eslint-plugin-functional/blob/master/docs/rules/no-class.md)

We keep this codebase FP-oriented and focused on the KISS principle. No classes should be present to avoid dealing with
state induced problems (and just general FP preference).

This codebase should only include functions and types. Nothing else.

This is especially true for static class methods. Never do that. Simply create functions and use them as you would.

Incorrect:

```ts
class AccountService {
  constructor(private readonly repository: AccountRepository) {}

  getAccounts() {
    return repository.getAccounts();
  }
}

const accountService = new AccountService(accountRepository);
const accounts = await accountService.getAccounts();
```

Correct:

```ts
function makeAccountService(repository: AccountRepository) {
  function getAccounts() {
    return repository.getAccounts();
  }

  // "private" functions = not returned
  return { getAccounts };
}

const accountService = makeAccountService(accountRepository);
const accounts = await accountService.getAccounts();
```

## Prefer types to interfaces

Supported by linter: Yes, via
[`eslint-plugin-prefer-type-alias`](https://github.com/otofu-square/eslint-plugin-prefer-type-alias)

Interfaces are useless when types exist. They both do the same job, but types are stricter and are more FP-oriented.

[More info](https://fettblog.eu/tidy-typescript-prefer-type-aliases/)

Incorrect:

```ts
interface AccountRepository {
  getAccounts(): Promise<Account[]>;
}
```

Correct:

```ts
type AccountRepository = {
  getAccounts(): Promise<Account[]>;
};
```

Even better, when you don't need multiple implementations:

```ts
function makeAccountRepository() {
  function getAccounts() {
    return [];
  }

  return { getAccounts };
}

type AccountRepository = ReturnType<typeof makeAccountRepository>;
```

## No arrow functions

Supported by linter: Yes, via [`func-style`](https://eslint.org/docs/rules/func-style)

Arrow functions can bring confusion, it's hard to see what is a value and what is a function. To avoid this situation,
always use `function`.

Incorrect:

```ts
const double = (a: number) => a * 2;
```

Correct:

```ts
function double(a: number) {
  return a * 2;
}
```

### Exceptions

This only applies to arrow functions declared as the given examples. For functions in type definitions or for simple
lambdas sent as params, arrow functions are sometimes best suited.

Examples:

```ts
type SomeType = {
  someValue: string;
  someFunction: () => Promise<void>;
};
```

```ts
const filteredValues = values.filter(value => value.someValue === 'someValue');
```

## No function return types

Supported by linter: **NO**

Specifying function return types often leads to imports only used for this exact reason. To avoid this, we can let our
IDEs tell us when a function returns an unwanted type. This will also be caught be the CI when building the app.

Incorrect:

```ts
import { Account } from 'types/accounts';

function getAccounts(): Promise<Account[]> {
  return [{ firstName: 'John', lastName: 'Doe' }];
}
```

Correct:

```ts
function getAccounts() {
  return [{ firstName: 'John', lastName: 'Doe' }];
}
```

## Wrap multiple params in a type

Supported by linter: **NO**

For readability and usability, we prefer using a single type as function param. This reduces ripple effect when we want
to switch around params placement and lets the function user decide in which order params are sent (defined in type).
This also reduces the amount of param type definition from n (number of values) to 1 (props type).

When there is a single param, you can choose to either keep it this way or use a props type. Your call.

Incorrect:

```ts
// Definition
function getAccountUri(baseUrl: string, accountId: string) {
  return `${baseUrl}/accounts/${accountId}`;
}

// Usage
const accountUri = getAccountUri('https://example.com', '123');
```

Correct:

```ts
// Definition
type Props = {
  baseUrl: string;
  accountId: string;
};

function getAccountUri({ baseUrl, accountId }: Props) {
  return `${baseUrl}/accounts/${accountId}`;
}

// Usage
const accountUri = getAccountUri({ baseUrl: 'https://example.com', accountId: '123' });
```

```ts
// Definition (this is okay, but a props type is better
function getAccountsUri(baseUrl: string) {
  return `${baseUrl}/accounts`;
}

// Usage
const accountUri = getAccountUri('https://example.com');
```

## Imports first, exports last

Supported by linter: Yes, via
[`import/first`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md) and
[`import/exports-last`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/exports-last.md)

We should read script files (including JS/TS) as functions, with params (imports) and returned values (exports). This
means files should always start with imports and end with exports.

Separate declarations from exports.

Incorrect:

```tsx
import { useState } from 'react';

export default function AccountPage() {
  const [account, setAccount] = useState<Account>(null);

  return <Container>Something<Container/>;
}

const Container = styled.div`
  color: black;
`;
```

Correct:

```tsx
import { useState } from 'react';

function AccountPage() {
  const [account, setAccount] = useState<Account>(null);

  return <Container>Something<Container/>;
}

const Container = styled.div`
  color: black;
`;

export default AccountPage;
```

## Avoid state mutation

Supported by linter: Yes, via
[`functional/immutable-data`](https://github.com/jonaskello/eslint-plugin-functional/blob/master/docs/rules/immutable-data.md)

Always make sure not to mutate the state without re-creating it. Best example is mutating function params. Remember to
always return the new value.

Incorrect:

```ts
function updateFirstName({ account, firstName }: UpdateFirstNameParams) {
  account.firstName = firstName;
  return account;
}
```

Correct:

```ts
function updateFirstName({ account, firstName }: UpdateFirstNameParams) {
  return {
    ...account, // Shallow copy, used as an example
    firstName,
  };
}
```

## No inverted if statement

Supported by linter: Yes, via [`no-negated-condition`](https://eslint.org/docs/rules/no-negated-condition)

In an `if/else` statement, we want to avoid having a negation as the main condition. This helps the readability of our
code. Instead, we want to have a positive condition for the `if` and let the negation be part of the `else` statement.

It's okay to have negated arguments in a simple `if` statement when there is no `else`.

Incorrect:

```ts
if (!account.hasPlan) {
  // Logic if account has no plan
} else {
  // Logic if account has plan
}
```

Correct:

```ts
if (account.hasPlan) {
  // Logic if account has plan
} else {
  // Logic if account has no plan
}
```

```ts
// This is okay, since there is no else statement
if (!account.hasPlan) {
  // Logic if account has no plan
}
```

## No unnecessary else statement

Supported by linter: Yes, via [`no-else-return`](https://eslint.org/docs/rules/no-else-return)

In the case of a returned value, it is unnecessary to return in an else statement when the if statement returns.

Incorrect:

```ts
if (account.hasPlan) {
  return createBillForPlan(account.plan);
} else {
  return createBillForAccount(account);
}
```

Correct:

```ts
if (account.hasPlan) {
  return createBillForPlan(account);
}

return createBillForAccount(account);
```

```ts
// Even better
return account.hasPlan ? createBillForPlan(account) : createBillForAccount(account);
```

## No complex ternary if statement

Supported by linter: Partly, via [`no-nested-ternary`](https://eslint.org/docs/rules/no-nested-ternary)

Ternary if statements are nice, but they can get overly complicated. This can occur when they hold much logic or when
they are chained together.

Incorrect:

```ts
return account.hasPlan
  ? {
      plan: account.plan,
      something,
      metadata: {
        whatever,
      },
    }
  : {
      account,
      somethingElse,
      metadata: {
        whatever,
      },
    };
```

```ts
return account.hasPlan
  ? createBillForPlan(account)
  : account.canBeBilled
    ? createBillForAccount(account)
    : throw createAccountBillingError(account);
```

Correct:

```ts
return account.hasPlan ? createBillingResponseForPlan(account.plan) : createBillingResponseForAccount(account); // In this example, we'd throw an error on a condition in this function
```

## Prefer array functions over for-loops

Supported by linter: **NO**

Incorrect:

```ts
for (const element in array) {
  console.log(element);
}
```

```ts
const newArray = [];
for (const element in array) {
  newArray.push(convert(element));
}
```

```ts
const newArray = [];
for (const element in array) {
  if (someFilteringFunction(element)) {
    newArray.push(element);
  }
}
```

Correct:

```ts
array.forEach(console.log);
array.forEach(element => someFunction(element, anotherValue));
```

```ts
const newArray = array.map(convert);
```

```ts
const newArray = array.filter(someFilteringFunction);
```

## Use Record over switch-case statements

Supported by linter: **NO**

Incorrect:

```ts
// Definition
function getColors(mode: ThemeMode) {
  switch (mode) {
    default:
    case 'light':
      return lightColors;
    case 'dark':
      return darkColors;
  }
}

// Usage
const colors = getColors(mode);
```

```ts
// Definition
const modeToColors: Record<ThemeMode, Colors> = {
  light: lightColors,
  dark: darkColors,
};

// Usage
const colors = modeToColors[mode];
```
