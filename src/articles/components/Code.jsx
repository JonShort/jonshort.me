import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import Prism from 'prism-react-renderer/prism';
import dracula from 'prism-react-renderer/themes/dracula';

(typeof global !== 'undefined' ? global : window).Prism = Prism;

require('prismjs/components/prism-rust');

const Code = ({ children, className }) => {
  const language = className.replace(/language-/, '');

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={dracula}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        // not sure why an extra token was being added
        // removed here
        tokens.pop();

        return (
          <pre
            className={`overflow-x-auto mw7 ${className}`}
            style={{ ...style, padding: '20px' }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        );
      }}
    </Highlight>
  );
};

export default Code;
