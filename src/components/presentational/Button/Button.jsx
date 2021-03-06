import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ className, type, onClick, value, children, ...props }) => {
  return (
    <button
      className={`btn ${className}`}
      type={type}
      onClick={onClick}
      {...props}
    >
      {value ? value : children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.any,
};

export default Button;
