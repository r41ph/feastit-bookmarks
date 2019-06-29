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
  type: PropTypes.string,

  /**
   * Set the label text
   */
  label: PropTypes.string,

  /**
   * Set the placeholder text
   */
  placeholder: PropTypes.string
};

const Input = props => {
  const {
    placeholder,
    label = '',
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
      />
    </>
  );
};

Input.propTypes = propTypes;

export default Input;
