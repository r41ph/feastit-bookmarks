import './AddBookmark.scss';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../shared/Button/Button';
import Input from '../shared/Input/Input';
import handleUrlvalidation from '../actions/url-validation';
const proptypes = {
  /**
   * Specifies add button click action
   */
  handleAddBookmark: PropTypes.func
};
const AddBookmark = props => {
  const [isValidUrl, setIsValidUrl] = useState(true);
  const [url, setUrl] = useState('');

  const { handleAddBookmark } = props;

  const handleChange = inputUrl => {
    setUrl(inputUrl);
  };

  const onHandleAddBookmark = inputUrl => {
    const isValid = handleUrlvalidation(inputUrl);
    setIsValidUrl(isValid);
    if (isValid && url) {
      handleAddBookmark(url);
      setUrl('');
    }
  };

  return (
    <div className='fi-add-bookmark'>
      <form>
        <Input
          placeholder='Enter URL'
          onChange={handleChange}
          value={url}
          type='url'
        />
        {!isValidUrl ? (
          <div className='fi-input__error'>Enter a valid URL</div>
        ) : null}
        <Button
          className='fi-button__add'
          onClick={() => onHandleAddBookmark(url)}
        >
          Add Bookmark
        </Button>
      </form>
    </div>
  );
};

AddBookmark.propTypes = proptypes;

export default AddBookmark;
