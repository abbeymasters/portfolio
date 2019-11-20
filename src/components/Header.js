import React from 'react';
import styles from './Header.css';

export default function Header() {
  return (
    <header className={styles.Header}>
      <h1>abbey masters</h1>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </nav>
    </header>
  );
}
