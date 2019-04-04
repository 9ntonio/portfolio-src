import * as React from 'react';

interface ISpacer {
  spacerStyle: Object;
}

export const Spacer = ({spacerStyle} : ISpacer) => (
  <div style={spacerStyle} >
    &nbsp;
  </div>
);
