import React from 'react';
import styles from './Contact.css';

const Contact = () => {

  return (
    <section className={styles.Contact}>
      <form>
        <label>NAME</label>
        <input type="text" className={styles.inputOne} id="name" name="id" placeholder="Name" />
        <label>EMAIL</label>
        <input type="email" className={styles.inputTwo} id="email" name="email" placeholder="Email Address" />
        <label>MESSAGE</label>
        <textarea id="message" className={styles.inputThree} name="message" placeholder="Your message here..."></textarea>
        <div className={styles.wrapper}>
          <button className={styles.button}>Submit</button>
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
      </form>
    </section>
  );
};

export default Contact;
