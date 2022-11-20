# How to use this repo?

Know that this repo is pretty opinionated about stuff. Having so many features in a boilerplate as a major downside: you
have to decide some solutions. If you fork or reuse this repo in some way, it's normal you're going to want to change
stuff around. It's okay if you do, if you create your own app or boilerplate based on this one.

Please, just make sure to **mention the author, [Fabien Roy](https://github.com/ExiledNarwal28), and this
[repo](https://github.com/treeview-app/treeview)**. We're using a [MIT license](../LICENSE), so it's the least of things
<3.

If you want to contribute, see the [contributing guide](../CONTRIBUTING.md).

So, here's what you gotta do:

- Fork the repo
- Mention the author and the repo in your copy
- Change all references to "@acme", "acme" and "ACME" for your app name
- Remove what you don't need (don't forget to update your docs accordingly). This includes:
  - Apps and packages
  - Unwanted features (SSR, theme switching, ...)
  - Config (tech-specific configs, linters, their rules, ...)
  - Some documentation (you'll most likely what to rework big chunks of the docs)
- Use actual package versions for all packages
  - This will allow you to better handle changes in your apps and packages
  - Use `peerDependencies` in packages' `package.json` to enforce dependency versions
  - You can then remove triggers for packages dependencies in workflows. Workflows will trigger then used package
    version are updated.
- When ready, setup your CD.
