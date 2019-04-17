import React from 'react';
import './header.css';
import { Logo, SearchIcon, ContactIcon, ShoppingCartIcon, ArrowDown } from '../icons/';

const Header = () => {
  return (
    <header className="header">
      <div className="header__messaging-line">Line for messaging</div>
      <nav className="nav">
        <section className="nav__logo">
          <Logo />
        </section>
        <section className="nav__search">
          <SearchIcon />
          <input className="nav__input" placeholder="Search" />
        </section>
        <section className="nav__menu">
          <div>Shag</div>
          <div>Contemporary</div>
          <div>
            More Styles <ArrowDown />
          </div>
          <div>Sale</div>
          <div className="nav__rugs">Shop All Rugs</div>
        </section>
        <section className="nav__icons">
          <div className="nav__contact">
            <ContactIcon />
          </div>
          <div className="nav__shopping-cart">
            <ShoppingCartIcon />
          </div>
        </section>
      </nav>
    </header>
  );
};

export default Header;

/* <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.18751 0.666668L4.77895 4.07523L1.3704 0.666668L0.333008 1.70406L4.77895 6.15L9.2249 1.70405L8.18751 0.666668Z" fill="black"/>
</svg> */
