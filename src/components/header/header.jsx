import React from 'react';
import './header.css';
import { Logo, SearchIcon, ContactIcon, ShoppingCartIcon } from '../icons/';

const Header = () => {
  return (
    <header className="header">
      <div className="header__messaging-line">Line for messaging</div>
      <nav className="nav">
        <div className="nav__logo">
          <Logo />
        </div>
        <div className="nav__search">
          <SearchIcon />
        </div>
        <div className="nav__menu">
          <div className="nav__contact">
            <ContactIcon />
          </div>
          <div className="nav__shopping-cart">
            <ShoppingCartIcon />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
