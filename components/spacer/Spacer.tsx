import * as React from 'react';

interface ISpacer {
  spacerStyle: object;
}

export const Spacer = ({ spacerStyle }: ISpacer) => <div style={spacerStyle}>&nbsp;</div>;
