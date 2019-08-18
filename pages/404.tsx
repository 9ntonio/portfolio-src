import * as React from 'react';
import Helmet from 'react-helmet';

import { Intro } from 'components/intro/Intro';
import { Video } from 'components/video/Video';

export default () => (
  <>
    <Helmet title="⚠️ 404 Page Not Found ⚠️" />

    <Intro>
      <h1>Hello 👋🏽 It looks like the page you are looking for was not found.</h1>
    </Intro>

    <Video to="https://vimeo.com/54784090" />
  </>
);
