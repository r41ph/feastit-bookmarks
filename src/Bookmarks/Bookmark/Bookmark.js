import './Bookmark.scss';
import React from 'react';
import Button from '../../shared/Button/Button';
import PropTypes from 'prop-types';

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
  const { onEdit = () => {}, onDelete = () => {} } = props;
  let { bookmark = '' } = props;
  const handleEdit = () => {
    onEdit();
  };
  const handleDelete = () => {
    onDelete();
  };

  const prefix = 'http://';

  if (!/^https?:\/\//i.test(bookmark)) {
    bookmark = prefix + bookmark;
  }

  return (
    <div className='fi-bookmark'>
      <a
        className='fi-bookmark__link'
        href={bookmark}
        target='_blank'
        rel='noopener noreferrer'
      >
        {bookmark}
        <div>
          <Button onClick={handleEdit}>Edit</Button>
          <Button onClick={handleDelete}>Delete</Button>
        </div>
      </a>
    </div>
  );
};

Bookmark.propTypes = propTypes;

export default Bookmark;
