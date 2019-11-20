import React from 'react';
import styles from './AboutMe.css';

export default function AboutMe() {
  return (
    <div className={styles.AboutMe}>
      <section className={styles.paragraphSection}>
        <h2>who am i?</h2>
        <p>Full Stack Software Developer with a background in Digital Marketing and Film, and a passion for creating innovative and stylish web applications.</p>
      </section>
      <section className={styles.imagesSection}>
        <img className={styles.firstImage} src="/src/assets/splotch_red.png" />
        <img className={styles.secondImage} src="/src/assets/practicepic.png" />
      </section>
    </div >
  );
}
