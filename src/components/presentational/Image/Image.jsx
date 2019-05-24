import React from 'react';
import PropTypes from 'prop-types';

// styles
import './Image.scss';

const Image = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={className} />;
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default Image;
