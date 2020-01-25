import React from 'react';
import PropTypes from 'prop-types';

import { DEFAULT_COLOR } from '../../constants';

const Hero = props => (
  <header className={`sans-serif dt w-100 bg-${props.color} vh-75`}>
      <div className="mw9 center pa4 pt5-ns ph7-l dtc v-mid">
          {props.date && (
            <time className="f6 mb2 dib ttu tracked">
              <small>
                {props.date}
              </small>
            </time>
          )}
          <h3 className="f1 f-headline-l measure-narrow lh-title mv0">
              <span className="bg-black-90 lh-copy white pa1 tracked-tight">
                {props.shortTitle || props.title}
              </span>
          </h3>
          {props.subtitle && (
            <h4 className="f3 fw1 georgia i">
              {props.subtitle}
            </h4>
          )}
          <h5 className="f6 ttu tracked black-80">
            By {props.author}
          </h5>
      </div>
  </header>
);

Hero.propTypes = {
  author: PropTypes.string,
  color: PropTypes.string,
  date: PropTypes.string,
  shortTitle: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

Hero.defaultProps = {
  author: 'Jon Short',
  color: DEFAULT_COLOR,
  date: null,
  shortTitle: null,
  subtitle: null,
  title: null,
};

export default Hero;
