import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.PNG';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'John Smith',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam itaque vitae similique quia et voluptates non quaerat repellendus reiciendis ratione, obcaecati, sint autem doloribus quo soluta inodio! Placeat, mollitia.',
  },
  {
    avatar: AVTR2,
    name: 'John Doe',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam itaque vitae similique quia et voluptates non quaerat repellendus reiciendis ratione, obcaecati, sint autem doloribus quo soluta inodio! Placeat, mollitia.',
  },
  {
    avatar: AVTR3,
    name: 'Jane Doe',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam itaque vitae similique quia et voluptates non quaerat repellendus reiciendis ratione, obcaecati, sint autem doloribus quo soluta inodio! Placeat, mollitia.',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="sec-testimonials__container">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="clientphoto" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
