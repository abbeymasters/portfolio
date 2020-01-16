import React from 'react';
import PropTypes from 'prop-types';
import styles from './PortfolioItems.css';

const PortfolioItems = ({ title, img, description, techStack, github, frontEndUrl, otherUrl }) => {

  const newArray = { techStack }.techStack;
  const splitTechStack = newArray.map(item => {
    return (
      <p key={item}>— {item}</p>
    );
  });

  return (
    <section className={styles.PortfolioItems}>
      <img src={img} alt={title}></img>
      <div className={styles.textSection}>
        <a href={github} rel="noopener noreferrer" target="_blank">GitHub</a>
        <a href={frontEndUrl} rel="noopener noreferrer" target="_blank">Front-End</a>
        {otherUrl && <a href={otherUrl} rel="noopener noreferrer" target="_blank">Other</a>}
        <h1>{title}</h1>
        <h3>{description}</h3>
        <h4>Tech Stack:</h4>
        <p>{splitTechStack}</p>
      </div>
    </section>
  );
};

PortfolioItems.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techStack: PropTypes.array.isRequired,
  github: PropTypes.string.isRequired,
  frontEndUrl: PropTypes.string.isRequired,
  otherUrl: PropTypes.string,
};

export default PortfolioItems;
