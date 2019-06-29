import './AddBookmark.scss';
import React, { useState } from 'react';
import Button from '../shared/Button/Button';
import Input from '../shared/Input/Input';
import handleUrlvalidation from '../actions/url-validation';

const AddBookmark = () => {
  const [isValidURL, setIsValidURL] = useState(true);
  const handleInputValidation = url => {
    setIsValidURL(handleUrlvalidation(url));
  };
  return (
    <div className='fi-add-bookmark'>
      <form>
        <Input
          placeholder='Enter Bookmark URL'
          onChange={handleInputValidation}
        />
        <Button className='fi-button__add'>Test</Button>
      </form>
      {!isValidURL ? (
        <div className='fi-input__error'>Enter a valid URL</div>
      ) : null}
    </div>
  );
};

export default AddBookmark;
