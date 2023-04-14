import React from 'react';
import CV from '../../assets/cv.pdf';

const CallToAction = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Reach Me Out
      </a>
    </div>
  );
};

export default CallToAction;
