import React from 'react';

const Pre = props => (
  <pre className="bl-l bw2-l b--black ph4-l" style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
    {props.children}
  </pre>
);

export default Pre;
