import React from 'react';
import styles from './Contact.css';

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
      <div>
        <h3 className={styles.inputOne}>Abbey Masters</h3>
        <h3 className={styles.inputTwo}>abbeykmasters@gmail.com</h3>
        <h3 className={styles.inputThree}>hi</h3>
      </div>
    </section>
  );
};


export default Contact;
