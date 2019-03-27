import * as React from 'react';
import Helmet from 'react-helmet';

// import { Segment } from 'components/segment/Segment';
import { Intro } from 'components/intro/Intro';

export default () => (
  <>
    <Helmet title="404 Not Found" />

    <Intro>
      <h1>Page was not found</h1>
    </Intro>
  </>
);
