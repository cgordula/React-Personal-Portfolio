import React from 'react';
import './about.css';
import ProfPic from '../../assets/profpic.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about" className="sec-about__container">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ProfPic} alt="profile-pic" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>6 years working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Employer</h5>
              <small>4+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>

          <p>
            I studied BS in Computer Engineering. I have more than eight years
            of working experience in different fields. I worked as a system
            administrator, data controller cum receptionist, front desk, and
            hotel manager. I have skills in photo editing and some graphic
            designs and also I took a Bootcamp course in Amazon Web Services and
            I am now a certified AWS Cloud Practitioner. With that skills and
            experiences, I am seeking other opportunities that will challenge me
            every day. So, I decided to shift to a career in web development and
            now I begin my journey in coding with the help of ZUITT Bootcamp.
          </p>

          <a href="#contact" className="btn btn-primary">
            Reach Me Out!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
