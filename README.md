[![logo](https://user-images.githubusercontent.com/937328/52405150-91398a00-2ac2-11e9-8b03-36b495817271.png)](https://ueno.co/?utm_source=github&utm_campaign=create-ueno-app)
<br /><br />
![banner](https://user-images.githubusercontent.com/937328/52405149-90a0f380-2ac2-11e9-96c0-54a97e3359bc.png)
<br /><br />
[![about](https://user-images.githubusercontent.com/937328/51540139-999c8e80-1e4d-11e9-866d-284657a34744.png)](https://ueno.co/contact/?utm_source=github&utm_campaign=create-ueno-app)
<br /><br />

## Template-www

This repository is used as git submodule for our differents starter kits. During the installation process of each starters, the submodule is resolved and this repository is cloned into the freshly created new app.

We use [`create-ueno-app`](https://github.com/ueno-llc/create-ueno-app) to create the project with the stack you need.

## Updating

If you make any update to this repository you will have to update our three starter kits: Gatsby, Next and CRA.

### [Gatsby](https://github.com/ueno-llc/ueno-gatsby-starter)

On the root of `ueno-gatsby-starter`, pull updates from `template-www`

```bash
git submodule update --init --force --remote
git add .
git commit -m "Updated latest template-www"
```

### [Next](https://github.com/ueno-llc/create-ueno-app)

On the root of `create-ueno-app`, pull updates from `template-www`

```bash
git submodule update --init --force --remote
git add .
git commit -m "Updated latest template-www"
```

Publishing new version of the package

```bash
npm version ("major" | "minor" | "patch")
git push master --tags
npm publish
```

### [create-react-app](https://github.com/ueno-llc/create-react-app)

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