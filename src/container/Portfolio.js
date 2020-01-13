import React, { useState } from 'react';
import styles from './Portfolio.css';
import PortfolioItems from '../components/PortfolioItems';
import portfolioItems from '../../data/portfolioItems';


export default function Portfolio() {

  const [index, setIndex] = useState(0);
  
  const handleIncrement = () => {
    event.preventDefault();
    if(index === 3) setIndex(0);
    else setIndex(index + 1);
  };

  const handleDecrement = () => {
    event.preventDefault();
    if(index === 0) setIndex(3);
    else setIndex(index - 1);
  };

  return (
    <section className={styles.Portfolio}>
      <button onClick={handleDecrement}>decrement</button>
      <PortfolioItems {...portfolioItems[index]} />
      <button onClick={handleIncrement}>increment</button>
    </section>
  );
}
