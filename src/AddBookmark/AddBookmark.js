import './AddBookmark.scss';
import React, { useState } from 'react';
import Button from '../shared/Button/Button';
import Input from '../shared/Input/Input';
import handleUrlvalidation from '../actions/url-validation';

const AddBookmark = () => {
  const [isValidURL, setisValidURL] = useState(true);
  const handleInputValidation = url => {
    console.log('validating');
    setisValidURL(handleUrlvalidation(url));
  };
  return (
    <>
      <form>
        <Input
          placeholder='Enter Bookmark URL'
          onChange={handleInputValidation}
          clas
        />
        <Button className='fi-button__add'>Test</Button>
      </form>
      {!isValidURL ? (
        <div className='fi-input__error'>Enter a valid URL</div>
      ) : null}
    </>
  );
};

export default AddBookmark;
