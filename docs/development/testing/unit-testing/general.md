# General unit testing

We use jest as our main testing framework. Here's a few tips.

This following guide is generic: it can be used for any unit test, regardless of the application layer (frontend,
backend, ...) or subject type (UI component, utility function, service function, ...).

## Definitions:

- Test: Represents a contract of a given subject. In the given conditions, we assert a statement is true.
- Stub: Fake data (objects, faked child components, ...) that is valid within the domain (business) rules.
- Mock: Mocked functionalities to be used by tests.
- Snapshot: Expected render of UI components.

## Rules of thumb

- A unit test is a test where the subject (function, UI component, ...) is "blackboxed". This means the subject as
  little to no external dependencies.
  - Given params should always be stubs or mocks.
  - Imports should be mocked.
- Place as little values as possible in your tests.
  - Keep in the "Arrange" part only the bare minimum.
  - If some values take many lines to be created, extract creation logic in a function, placed at top of the tests file.

## Test structure

We use a Given-When-Then test structure, placing respectively the Arrange-Act-Assert parts of each tests in those
definitions. This works pretty well with jest:

```ts
describe('Test subject', () => {
  describe('Given some value', () => {
    // Arrange

    describe('When doing something', () => {
      // Act

      test('Then this should happen', () => {
        // Assert
      });
    });
  });
});
```

This structure helps reusing parts of tests that would normally be duplicated:

```ts
describe('Test subject', () => {
  describe('Given some value', () => {
    // Arrange

    describe('When doing something', () => {
      // Act

      test('Then this should happen', () => {
        // Assert
      });
    });

    describe('When doing something else', () => {
      // Act

      test('Then this should happen', () => {
        // Assert
      });

      test('Then this should also happen', () => {
        // Assert
      });
    });
  });
});
```

### Exceptions

One problem with this structure is that `describe` cannot handle asynchronous logic. This means that an "Assert" or
"Act" statement sometimes has to be put where "Assert" is made. In those cases, we reduce as much as possible modifying
the intended test structure by placing as little logic as possible in the "Assert" statement. Examples:

```ts
describe('Test subject', () => {
  describe('Given some value', () => {
    // Arrange

    describe('When doing something asynchronous', () => {
      test('Then this should happen', async () => {
        // Act
        const myData = await getMyData();

        // Assert
      });
    });
  });
});
```

```ts
describe('Test subject', () => {
  describe('Given some asynchronous value', () => {
    describe('When doing something', () => {
      test('Then this should happen', async () => {
        // Arrange
        const expectedValue = await getExpectedValue();

        // Act

        // Assert
      });
    });
  });
});
```

```ts
describe('Test subject', () => {
  describe('Given some asynchronous value', () => {
    describe('When doing something asynchronous', () => {
      test('Then this should happen', async () => {
        // Arrange
        const expectedValue = await getExpectedValue();

        // Act
        const myData = await getMyData();

        // Assert
      });
    });
  });
});
```
