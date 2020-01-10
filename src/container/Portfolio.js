import React from 'react';
import styles from './Portfolio.css';
import PortfolioItems from '../components/PortfolioItems';

export default function Portfolio() {

  return (
    <section className={styles.Portfolio}>
      <PortfolioItems />
    </section>
  );
}
