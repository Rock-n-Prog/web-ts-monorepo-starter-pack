# UI Components Unit Testing

Unit testing guide for UI components.

UI Components can be quite a chore to test. [Jest can be rough to get the hang of](mocking.md) and testing said
components often brings little value given the time it takes to get tests right.

Generally, keep in mind that "standard" unit tests on UI components are often not what we are looking for. Read this
guide for more info.

## Storybook

While Storybook is not a testing framework, we believe it's the best tool we have to make sure UI components render
appropriately. Automated tests can give us an insight on ripple effect and unwanted changes, but nothing beats the human
eye for spotting visual bugs.

Storybook helps with this. On top of being a great UI library showcase, it helps us see what different variations of UI
components look like.

**All pages and components must have their own stories, with one story per possible variant.**

## Snapshot tests

Snapshot tests are simple and easy. They provide a quick insight on what your changes impact (ripple effect). This can
lead you to spot easily unwanted changes on some files.

This comes with a low cost. When you have some snapshots to be changed and that you are sure those fit your scoped code
change impact, simply run `yarn test:update`. Voilà!

**Like Storybook stories, all pages and components must have their own snapshot tests, with one test per possible
variant.**

## Standard unit tests

By standard unit tests, we mean unit tests where you render a UI component and make sure some data is displayed, or that
some functions are called when pressing a button.

Standard unit tests are to be used lightly with components. The pattern you want here is simple:

- Super-small components
- All logic moved to specific functions (that can and will be unit tested!)
- No bullshit, strong and easy-to-read logic.

If you do this, you will soon realize that unit testing components is almost useless. I say almost because it does have
value sometimes. For instance, context providers have enough logic to be worth testing appropriately.

I won't forbid you from unit-testing your components. Be really, tell me a component like the following is worth a test:

```tsx
function RecipeTable({ recipes }: Props) {
  return recipes.map(recipe => <RecipeTableRow recipe={recipe} />);
}
```

I firmly believe good UI code, that is Storybook'd and snapshot tested, doesn't require standard unit tests. Of course,
there are exceptions, and we can't always make our code as simple as that. Logic-filled UI components need unit testing.
But in that case, doesn't it reveal a bigger, architectural problem?
