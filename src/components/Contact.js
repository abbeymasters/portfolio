import React from 'react';
import styles from './Contact.css';
import meicon from '../assets/meicon.png';
import emailicon from '../assets/emailicon.png';
import location from '../assets/location.png';

// button animation inspired by https://codepen.io/ines/pen/oeZdYv?editors=1100

const Contact = () => {
  return (
    <section className={styles.Contact}>
      <div className={styles.wrapper}>
        <p>Interested in a chat?</p>
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
      <section className={styles.whoami}>
        <div>
          <img src={meicon} />
          <h3 className={styles.inputOne}>Abbey Masters</h3>
        </div>
        <div>

          <img src={emailicon} />
          <a href="mailto:abbeykmasters@gmail.com" className={styles.inputTwo}>abbeykmasters@gmail.com</a>
        </div>
        <div>
          <img src={location} />
          <h3 className={styles.inputThree}>Portland, Oregon</h3>
        </div>
      </section>
    </section>
  );
};


export default Contact;
