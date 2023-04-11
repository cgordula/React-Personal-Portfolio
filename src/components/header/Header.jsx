import React from 'react';
import './header.css';
import CallToAction from './CallToAction';
import ME from '../../assets/prof-pic.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Carmina Gordula</h1>
        <h5 className="text-light">Jr. Frontend Developer</h5>
        <CallToAction />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          scroll down
        </a>
      </div>
    </header>
  );
};

export default Header;
