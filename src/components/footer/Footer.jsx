import React from 'react';
import './footer.css';
import Logo from '../../assets/cg-logo.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">
        <img src={Logo} alt="logo" />
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonial">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebookSquare />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Created by Carmina Gordula | All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
