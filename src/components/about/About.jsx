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
              <small>8+ years working</small>
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
            As a seasoned professional with over eight years of experience in
            various industries, I have gained a wealth of knowledge and skills
            that make me a valuable asset to any team. My background in Computer
            Engineering has provided me with a strong foundation in technology,
            which I have applied to roles ranging from system administration to
            hotel management. Additionally, my proficiency in photo editing and
            graphic design has allowed me to add a creative touch to my work.
          </p>
          <p>
            However, I am always seeking new challenges and opportunities for
            growth. That's why I recently made the decision to pivot my career
            to web development, and I enrolled in the ZUITT Bootcamp to hone my
            coding skills. As a certified AWS Cloud Practitioner, I am confident
            in my ability to adapt to new technologies and contribute to
            projects of any size. I am excited to see where this new chapter
            takes me and look forward to applying my diverse skill set to create
            innovative solutions for clients.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
