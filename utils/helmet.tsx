const title = 'Antonio Almena';
const description = 'Collected works! 🧑🏽‍💻';

import favicon from 'assets/images/favicon.png';
import share from 'assets/images/share.png';
const urlShare = `https://www.almena.io${share}`;

export const helmet = {
  title,
  titleTemplate: '%s - Antonio Almena',
  htmlAttributes: { lang: 'en' },
  meta: [
    { name: 'description', content: description },
    { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    { name: 'msapplication-navbutton-color', content: '#000' },
    { name: 'msapplication-TileColor', content: '#000' },
    { name: 'theme-color', content: '#000' },

    { property: 'og:title', content: title },
    { property: 'og:image', content: urlShare },
    { property: 'og:image:width', content: '880px' },
    { property: 'og:image:height', content: '440px' },
    { property: 'og:image:alt', content: description },

    { name: 'twitter:title', content: title },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: urlShare },
    { name: 'twitter:site', content: '@9ntonio' },
    { name: 'twitter:creator', content: '@9ntonio' },
    { name: 'twitter:description', content: description },
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: favicon }],
};
