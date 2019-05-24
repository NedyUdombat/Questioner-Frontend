import React from 'react';
import PropTypes from 'prop-types';

// styles
import './Input.scss';

const Input = ({
  placeholder,
  className,
  type,
  onChange,
  value,
  name,
  required,
  minLength,
  pattern,
  title,
}) => {
  return (
    <input
      placeholder={placeholder}
      className={className}
      type={type}
      onChange={onChange}
      value={value}
      name={name}
      required={required}
      minLength={minLength}
      pattern={pattern}
      title={title}
    />
  );
};

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  pattern: PropTypes.string,
  required: PropTypes.string,
  minLength: PropTypes.string,
  title: PropTypes.string,
};

export default Input;
