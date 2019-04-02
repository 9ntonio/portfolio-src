## Portfolio-Src

This repository is used as git submodule for the "src" folder of the portfolio starter. During the installation process of the portfolio, the submodule is resolved and this repository is cloned into the freshly created app.

This submodule is based on Ueno's starter (which in turn was an extension of the Gatsby starter) which you can check out here: [`create-ueno-app`](https://github.com/ueno-llc/create-ueno-app).

Note that I added a video component, a spacer component, and some portfolio specific block components in hopes that it may help you if you wiush to use this submodule. 

In order to install the submodule correctly, please make sure to follow the following directions:

### [Gatsby](https://github.com/9ntonio/portfolio)

On the root of `portfolio`, pull updates from `portfolio-src`

```bash
git submodule update --init --force --remote
git add .
git commit -m "Updated latest portfolio-src"
```

Please let me know if you have any questions or notes that you feel may help improve this project. I hope this helps. [`Antonio`](mailto:antonio.almena.sf@gmail.com). 