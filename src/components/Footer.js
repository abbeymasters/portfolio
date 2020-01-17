/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import styles from './Footer.css';

export default function Footer() {
  return (
    <div className={styles.Footer}>
      {/* Fun animation found via: https://css-tricks.com/having-fun-with-link-hover-effects/ */}
      <section className={styles.social}>
        <a href="https://www.linkedin.com/in/abbeymasters/" target="_blank">LinkedIn</a>
        <a href="https://github.com/abbeymasters" target="_blank">GitHub</a>
        <a href="https://www.twitter.com/abbeykmasters/" target="_blank">Twitter</a>
      </section>
      <p>&copy; abbey masters 2019</p>
    </div>
  );
}

