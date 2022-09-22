# General testing

Here's a list of rules to keep in mind when testing.

- Any change to the codebase should impact tests. Otherwise, we are missing tests, so create them.
- Ask yourself: what tests suit best the logic?
  - For instance, unit testing in UI Components is a special case of this. They are not to be tested like functions.
  - If your app is full of many small and easy-to-read functions (it should!), maybe some simple integration tests are
    the right fit for you.
- Keep tests small. It's real code, in a real codebase. All the same principles apply, nobody likes a 300+ line file.

Other general rules:

## Use .each to handle multiple possibilities

Supported by linters: **NO**

Incorrect:

```ts
describe('add', () => {
  describe('Given 1 and 2', () => {
    const firstValue = 1;
    const secondValue = 2;
    const expectedResult = 3;

    describe('When adding', () => {
      const result = add(firstValue, secondValue);

      test('Then sum', () => {
        expect(result).toBe(expectedResult);
      });
    });
  });

  // And so on
});
```

Correct:

```ts
describe('add', () => {
  describe.each([
    [1, 2, 3],
    [2, 3, 5],
    [3, 4, 7],
  ])('Given %i and %i', (firstValue: number, secondValue: number, expectedResult: number) => {
    describe('When adding', () => {
      const result = add(firstValue, secondValue);

      test(`Then sum to ${expectedResult}`, () => {
        expect(result).toBe(expectedResult);
      });
    });
  });
});
```
