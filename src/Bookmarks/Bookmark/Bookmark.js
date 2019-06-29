import './Bookmark.scss';
import React from 'react';
import Button from '../../shared/Button/Button';
import PropTypes from 'prop-types';
import cx from 'classnames';

const propTypes = {
  /**
   * Specifies edit button action
   */
  onEdit: PropTypes.func,
  /**
   * Specifies delete button action
   */
  onDelete: PropTypes.func
};

const Bookmark = props => {
  const { bookmark, className, onEdit = () => {}, onDelete = () => {} } = props;
  const handleEdit = () => {
    onEdit();
  };
  const handleDelete = () => {
    onDelete();
  };

  const bookmarkClasses = cx('fi-bookmark', `${className}`);

  return (
    <div className='fi-bookmark'>
      <div className={bookmarkClasses}>{bookmark}</div>
      <Button onClick={handleEdit}>Edit</Button>
      <Button onClick={handleDelete}>Delete</Button>
    </div>
  );
};

Bookmark.propTypes = propTypes;

export default Bookmark;
