import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { AiOutlineSkype } from 'react-icons/ai';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // put the service id, email template and public key  from emailjs.com
    emailjs.sendForm(
      'service_iac09qe',
      'template_cs9fk4e',
      form.current,
      '7t0cBO_iR3mFa64Kp'
    );

    e.target.reset();
  };

  return (
    <section id="contact" className="sec-contact__container">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>carminagordula@gmail.com</h5>
            <a
              href="https://mail.google.com/mail/u/0/?ogbl#inbox"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <AiOutlineSkype className="contact__option-icon" />
            <h4>Skype</h4>
            <h5>cgordula</h5>
            <a
              href="https://web.skype.com/?openPstnPage=true"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
