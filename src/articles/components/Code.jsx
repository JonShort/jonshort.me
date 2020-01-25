import React from 'react';

const Code = props => (
  <code className={`lh-copy ${props.className}`} metastring="true">
    {props.children}
  </code>
);

export default Code;
