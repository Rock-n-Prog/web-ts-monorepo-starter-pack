# Contributing

**Contributions are welcome!**

## Code of conduct

Before contributing to the project, please read our [code of conduct](CODE_OF_CONDUCT.md) and
[docs]([docs](./docs/README.md).

## Task tracking

Task tracking uses the [project board](https://github.com/orgs/treeview-app/projects/1/views/1).

### Functionalities to implement

### Issues

We track our issues with GitHub issues. Each issue must have at least one person assigned, an associated milestone and
correct labels.

Milestones represent release versions. We use [Semanting Versioning 2.0.0](https://semver.org/), which is as follows :
`<major>.<minor>.<patch>`.

### Project board

Issues must be placed on the [project board](https://github.com/orgs/Stratejia/projects/3/views/1).

The person in charge of an issue is in charge of moving it across the project board.

#### Status

- To Groom : Issues not yet estimated (size and priority)
- Backlog : Issues not yet marked as "To Do"
- To Do : Issues that must be done to deliver the current iteration
- In Progress : Self-explanatory
- Under Review : Issues currently in review or waiting to be merged
- Done : Closed issues (see : Definition of done)

#### Priority

Urgent issues must be adressed before anything else, even in progress issues. Other priorities are simply in descending
order.

- Urgent
- High
- Medium
- Low

#### Size

Estimating with full work days.

- X-Large: Takes multiple weeks
- Large: Takes a week
- Medium: Takes a few days
- Small: Takes a day
- Tiny: Takes a few hours

### Bug reporting

A test not passing is a bug.

When a bug is spotted in the application, it must be reported as an issue on GitHub issues with the appropriate
template. There is a `bug` label. It must be added in the To do column of the project, above all non-bugs issues,
ordered by priority.

### Commits

We highly recommend using [convential commits](https://www.conventionalcommits.org/en/v1.0.0). Note that this is mildly
important, since we only allow code merged from PR and PRs are always squashed.

### Branches and pull requests

We use [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/) to separate our branches.

We use trunk based development with `develop` as a main branch. Every PR adding a feature to the application or solving
a bug must be merged into `develop`.

For each issue, there must be at least one PR (more PRs could be added if the issue is reopened). This PR must build.
Also, two reviewers must approve the PR before it is merged into `develop`. Once it is merged, it will have to pass CI
and CD check on `develop`.

PR names are as following : `<code>: what is added` (ex : `feat: add accounts endpoint`).

The one in charge of merging the PR is the one in charge of the associated issue.

To review a PR is a lot of things. First, you must read each added line, understand them, make sur they make sense and
point out if there is any way to improve it. You must then pull the branch, test the app, make sure it works in a local
environment and call it a day. Only approve PRs that are 100% ready to merge. Otherwise, request changes explaining
clearly what must be added for approval.

`main` is our production branch. Once in a while, when `develop` is perfectly stable and operational, we merge `develop`
into `main`.

### Definition of done

A milestone is achieved once every of its issues are solved. This includes everything to add for a new release, from
adding features, to solving bugs and improving performance.

Issues are closed once all described tasks are confirmed done by the reviewers, which only means that the PR is closed.
This requires reviewing code style, quality, tests and actual functionality of said PR.

## Development

### Code style

We use [eslint](https://eslint.org) and [prettier](https://prettier.io). It is checked pre-commit and during CI check.
To format code, use `pnpm lint:fix` and `pnpm format:fix`.

No comment should be in the source code. Some exceptions are small explanations. In those rare cases, comments are clear
and tiny.

TODOs are okay, as long as they do not make it to the release. They can be used to mark where a certain issue must be
done (in which case, an issue number is much appreciated). In almost all other cases, they should be removed an
converted to an actual issue.

## Contributors

- Fabien Roy ([ExiledNarwal28](https://github.com/ExiledNarwal28) and
  [froy-at-stratejia](https://github.com/froy-at-stratejia))
