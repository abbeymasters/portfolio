import React from 'react';
import styles from './Portfolio.css';
import PortfolioItems from '../components/PortfolioItems';
import portfolioItems from '../../data/portfolioItems';


export default function Portfolio() {

  return (
    <section className={styles.Portfolio}>
      <button>decrement</button>
      <PortfolioItems {...portfolioItems[1]} />
      <button>increment</button>
    </section>
  );
}
