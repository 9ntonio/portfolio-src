import * as React from 'react';
import Helmet from 'react-helmet';

import { Intro } from 'components/intro/Intro';
import { Video } from 'components/video/Video';
import { Spacer } from 'components/spacer/Spacer';

export default () => (
  <>
    <Helmet title="404 Not Found" />

    <Intro>
      <h1>Hello 👋🏽 It looks like the page you were looking for was not found.</h1>
    </Intro>

    <Video to="https://vimeo.com/54784090" />

    <Spacer />
  </>
);
