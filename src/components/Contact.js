import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Contact.css';
import PropTypes from 'prop-types';
import { getMailSent } from '../selectors/contentSelectors';

// button animation inspired by https://codepen.io/ines/pen/oeZdYv?editors=1100

const Contact = ({ handleChange, handleEmail, handleMessage, handleSubmit }) => {
  const mailSent = useSelector(state => getMailSent(state));

  return (
    <section className={styles.Contact}>
      <form>
        <label>NAME</label>
        <input onChange={handleChange} type="text" className={styles.inputOne} id="name" name="id" placeholder="Name" />
        <label>EMAIL</label>
        <input onChange={handleEmail} type="email" className={styles.inputTwo} id="email" name="email" placeholder="Email Address" />
        <label>MESSAGE</label>
        <textarea onChange={handleMessage} id="message" className={styles.inputThree} name="message" placeholder="Your message here..." ></textarea>
        <div className={styles.wrapper}>
          <button onClick={(e) => handleSubmit(e.target.value)} className={styles.button}>Submit</button>
          {/* Filter: https://css-tricks.com/gooey-effect/ */}
          <svg
            style={{ visibility: 'hidden', position: 'absolute' }}
            width="0"
            height="0"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1">
            <defs>
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10"
                  result="blur" />
                <feColorMatrix in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                  result="goo" />
                <feComposite in="SourceGraphic"
                  in2="goo"
                  operator="atop" />
              </filter>
            </defs>
          </svg>
        </div>
        <div>
          {mailSent &&
            <div>Thank you for contacting us.</div>
          }
        </div>
      </form>
    </section>
  );
};

Contact.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleEmail: PropTypes.func.isRequired,
  handleMessage: PropTypes.func.isRequired
};

export default Contact;
