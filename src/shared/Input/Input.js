import './Input.scss';
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const propTypes = {
  /**
   * Specifies input onChange action
   */
  onChange: PropTypes.func,

  /**
   * Set custom CSS classnames
   */
  className: PropTypes.string,

  /**
   * Set input type
   */
  type: PropTypes.string
};

const Input = props => {
  const { className, onChange = () => {}, type = 'text' } = props;

  const handleChange = event => {
    onChange(event.target.value);
  };

  const inputClasses = cx('fi-input');

  return (
    <input
      type={type}
      className={`${className} ${inputClasses}`}
      onChange={handleChange}
    />
  );
};

Input.propTypes = propTypes;

export default Input;
