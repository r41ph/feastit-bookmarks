import React from 'react';
import Logo from '../shared/Logo/Logo';
import './Header.scss';

const Header = () => {
  return (
    <header className='fi-header'>
      <Logo />
      <span className='fi-header__title'>Bookmarks</span>
    </header>
  );
};

export default Header;
