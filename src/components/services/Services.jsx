import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (
    <section id="services" className="sec-services__container">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* First list */}
        <article className="service">
          <div className="service__head">
            <h3>Graphic Designs</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Logos and branded elements</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Business cards, letterhead & envelopes</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Posters, banners and signage</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Social media & digital marketing graphics</p>
            </li>
          </ul>
        </article>
        {/* Second list */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive website</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>UI/UX design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Mockup design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web application</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web hosting</p>
            </li>
          </ul>
        </article>

        {/* Second list */}
        <article className="service">
          <div className="service__head">
            <h3>Media Buying</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Facebook ads</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Tik tok ads</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content creation</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
