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
   * Sets custom CSS classnames
   */
  className: PropTypes.string,

  /**
   * Sets input type
   */
  type: PropTypes.string,

  /**
   * Sets the label text
   */
  label: PropTypes.string,

  /**
   * Sets the placeholder text
   */
  placeholder: PropTypes.string,

  /**
   * Sets the input value
   */
  value: PropTypes.string
};

const Input = props => {
  const {
    placeholder,
    label = '',
    value,
    className = '',
    onChange = () => {},
    type = 'text'
  } = props;

  const handleChange = event => {
    onChange(event.target.value);
  };

  const inputClasses = cx('fi-input');

  return (
    <>
      {label ? <label className='fi-input__label'>label</label> : null}
      <input
        type={type}
        className={`${className} ${inputClasses}`}
        onChange={handleChange}
        placeholder={placeholder}
        value={value}
      />
    </>
  );
};

Input.propTypes = propTypes;

export default Input;
