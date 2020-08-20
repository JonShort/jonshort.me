import React from 'react';
import PropTypes from 'prop-types';

import imageMappings from '../imageMappings';

const Image = (props) => {
  const resolvedSrc = imageMappings[props.src];

  if (!resolvedSrc) {
    return (
      <img className="pt4 pb4" src={props.src} alt={props.alt} loading="lazy" />
    );
  }

  return <img className="pt4 pb4" src={resolvedSrc} alt={props.alt} />;
};

Image.propTypes = {
  children: PropTypes.node,
};

export default Image;
