## Template-www

This repository is used as git submodule for our differents starter kits. During the installation process of each starters, the submodule is resolved and this repository is cloned into the freshly created new app.

Check out [`create-ueno-app`](https://github.com/ueno-llc/create-ueno-app) to create projects with the stack you need.

## Updating

If you make any update to this repository you will have to update our three starter kits: Gatsby, Next and CRA.

### [Gatsby](https://github.com/ueno-llc/ueno-gatsby-starter)

On the root of `ueno-gatsby-starter`, pull updates from `template-www`

```bash
git submodule update --init --force --remote
git add .
git commit -m "Updated latest template-www"
```

### [Next](https://github.com/ueno-llc/ueno-next-starter)

On the root of `ueno-next-starter`, pull updates from `template-www`

```bash
git submodule update --init --force --remote
git add .
git commit -m "Updated latest template-www"
```

### [create-react-app](https://github.com/ueno-llc/ueno-cra-starter)

On the root of `ueno-llc/create-react-app`, branch `@feature/ueno`, pull updates from `template-www`

```bash
git submodule update --init --force --remote
git add .
git commit -m "Updated latest template-www"
```

Publishing new version of the package

```bash
yarn lerna publish --scope="@ueno/react-scripts"
```
