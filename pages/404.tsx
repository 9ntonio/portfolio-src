import * as React from 'react';
import Helmet from 'react-helmet';

import { Intro } from 'components/intro/Intro';
import { Video } from 'components/video/Video';
import { Spacer } from 'components/spacer/Spacer';

export default () => (
  <>
    <Helmet title="Oh Boy!!!" />

    <Intro>
      <h1>Oh Boy! That didn't go as planned! ⛔</h1>
    </Intro>

    <Video
      to="https://vimeo.com/54784090?playsinline=0"
      link="https://www.cnn.com/travel/article/paris-best-time-to-visit-spring/index.html"
      header="While you're here, enjoy a bit of Paris 🇫🇷 in in spring 🌸."
    />

    <Spacer spacerStyle={{ height: `${65}px` }} />
  </>
);
