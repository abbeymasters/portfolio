import React from 'react';
import styles from './AboutMe.css';

export default function AboutMe() {
  return (
    <div className={styles.AboutMe}>
      <section className={styles.paragraphSection}>
        <section className={styles.whoAmI}>
          <h2>who am</h2>
          <img src="src/assets/eye.png" alt="grid" />
          <h2>?</h2>
        </section>
        <p>Full Stack Software Developer with a background in Digital Marketing and Film, and a passion for creating innovative and stylish web applications.</p>
      </section>
      <section className={styles.imagesSection}>
        <img className={styles.firstImage} src="/src/assets/splotch_red.png" />
        <img className={styles.secondImage} src="/src/assets/practicepic.png" />
      </section>
    </div >
  );
}
