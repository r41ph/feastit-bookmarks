import './Button.scss';
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const propTypes = {
  /**
   * Specifies button click action
   */
  onClick: PropTypes.func,

  /**
   * Set button text
   */
  children: PropTypes.string,

  /**
   * Set custom CSS classnames
   */
  className: PropTypes.string,

  /**
   * Set the disable status of the button
   */
  isDisable: PropTypes.bool
};

const Button = props => {
  const {
    isDisable = false,
    className = '',
    children,
    onClick = () => {}
  } = props;
  const handleClick = e => {
    e.preventDefault();
    onClick();
  };

  const buttonClasses = cx('fi-button');

  return (
    <button
      className={`${buttonClasses} ${className}`}
      onClick={handleClick}
      disabled={isDisable}
    >
      {children}
    </button>
  );
};

Button.propTypes = propTypes;

export default Button;
