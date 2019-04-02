## Portfolio-Src

This repository is used as git submodule for the "src" folder of the [`portfolio starter`](https://github.com/9ntonio/portfolio). During the installation process of the portfolio, the submodule is resolved and this repository is cloned into the freshly created app.

This submodule is based on [`Ueno's`](https://ueno.co/) starter (which in turn was an extension of the Gatsby starter) which you can check out here: [`create-ueno-app`](https://github.com/ueno-llc/create-ueno-app). If you want a starter that has no portfolio structure what so ever, I would highly recomend using their starter kit. 

Please note that I added a video component, a spacer component, and some portfolio specific block components in hopes that it may help you in your portfolio build. 

In order to install the submodule correctly, please make sure to follow these directions:

### [Portfolio](https://github.com/9ntonio/portfolio)

On the root of `portfolio`, pull updates from `portfolio-src`

```bash
git submodule update --init --force --remote
git add .
git commit -m "Updated latest portfolio-src"
```

Please let me know if you have any questions or notes that you feel may help improve this project as I plan on expanding it's capabilities over time. I hope this helps 👋🏽. [`Antonio`](mailto:antonio.almena.sf@gmail.com). 