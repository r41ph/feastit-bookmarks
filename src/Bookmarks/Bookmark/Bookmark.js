import './Bookmark.scss';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import handleUrlvalidation from '../../actions/url-validation';
import Button from '../../shared/Button/Button';
import Input from '../../shared/Input/Input';

const propTypes = {
  /**
   * Specifies edit button action
   */
  onEdit: PropTypes.func,
  /**
   * Specifies delete button action
   */
  onDelete: PropTypes.func,

  /**
   * Specifies bookmark delete action
   */
  handleDeleteBookmark: PropTypes.func,
  /**
   * Specifies bookmark edit action
   */
  handleEditBookmark: PropTypes.func
};

const Bookmark = props => {
  const { bookmark, handleDeleteBookmark, handleEditBookmark } = props;
  const [edit, setEdit] = useState(false);
  const [inputValue, setInputValue] = useState(bookmark);
  const [error, setError] = useState(false);

  const onHandleDelete = bookmark => {
    handleDeleteBookmark(bookmark);
  };

  const onHandleEdit = () => {
    setInputValue(bookmark);
    if (edit && !error) {
      handleEditBookmark(bookmark, inputValue);
      setEdit(false);
    } else {
      console.log('inputValue', inputValue);
      setEdit(true);
      setInputValue(inputValue);
    }
  };

  const handleChange = inputValue => {
    setError(!handleUrlvalidation(inputValue));
    setInputValue(inputValue);
  };

  const isError = cx(`${error ? 'fi-bookmark__edit--error' : ''}`);

  return (
    <div className='fi-bookmark'>
      {edit ? (
        <Input
          value={inputValue}
          onChange={handleChange}
          className={`fi-bookmark__edit ${isError}`}
        />
      ) : (
        <a
          className='fi-bookmark__link'
          title='Click to go!'
          href={bookmark}
          target='_blank'
          rel='noopener noreferrer'
        >
          {bookmark}
        </a>
      )}

      <div className='fi-bookmark__options'>
        <Button
          className='fi-button__edit'
          onClick={() => onHandleEdit(bookmark)}
        >
          {edit ? 'Save' : 'Edit'}
        </Button>
        <Button
          className='fi-button__delete'
          onClick={() => onHandleDelete(bookmark)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

Bookmark.propTypes = propTypes;

export default Bookmark;
