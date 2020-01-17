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
      <button onClick={handleDecrement}><img src="src/assets/leftarrow.png" alt="decrement arrow"></img></button>
      <PortfolioItems {...portfolioItems[index]} />
      <button className={styles.increment} onClick={handleIncrement}><img src="src/assets/rightarrow.png" alt="increment arrow"></img></button>
    </section>
  );
}
