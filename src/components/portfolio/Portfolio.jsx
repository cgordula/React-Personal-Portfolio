import React from 'react';
import './portfolio.css';
import IMAGE1 from '../../assets/portfolio1.PNG';
import IMAGE2 from '../../assets/portfolio2.PNG';
import IMAGE3 from '../../assets/portfolio3.PNG';
import IMAGE4 from '../../assets/portfolio4.PNG';

const data = [
  {
    id: 1,
    image: IMAGE1,
    title: 'Personal Web Portfolio',
    link: 'https://github.com/cgordula/gordula-capstone-1',
    demo: 'https://cgordula.github.io/gordula-capstone-1/',
  },
  {
    id: 2,
    image: IMAGE2,
    title: 'Ecommerce Backend API',
    link: 'https://gitlab.com/batch-211-carmina/capstone-2-gordula',
    demo: 'https://ecommerce-capstone-2-gordula.onrender.com/products',
  },
  {
    id: 3,
    image: IMAGE3,
    title: 'Cake Online Shop',
    link: 'https://gitlab.com/batch-211-carmina/capstone-3-gordula',
    demo: 'https://carmaj-swittut-cakeshop.vercel.app/ ',
  },
  {
    id: 4,
    image: IMAGE4,
    title: 'Company Web App - UI Design Mockup',
    link: 'https://www.figma.com/',
    demo: 'https://www.figma.com/proto/4EIm1kZ4TO6os9QQOEAM7e/Datagenetx?node-id=1-2&starting-point-node-id=32%3A70',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="sec-portfolio__container">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, link, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="title" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={link} className="btn" target="_blank" rel="noreferrer">
                  Link
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
