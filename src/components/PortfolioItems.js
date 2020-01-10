import React from 'react';
import PropTypes from 'prop-types';
import styles from './PortfolioItems.css';

const PortfolioItems = ({ title, img, description, techStack, github, frontEndUrl, otherUrl }) => {
  return (
    <section className={styles.PortfolioItems}>
      <h1>{title}</h1>
      <img src={img} alt={title}></img>
      <h3>{description}</h3>
      <p>{techStack}</p>
      <a href={github} rel="noopener noreferrer" target="_blank">Deployed Site</a>
      <a href={frontEndUrl} rel="noopener noreferrer" target="_blank">Front End</a>
      <a href={otherUrl} rel="noopener noreferrer" target="_blank">BackEnd</a>
    </section>
  );
};

PortfolioItems.proptypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techStack: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  frontEndUrl: PropTypes.string.isRequired,
  otherUrl: PropTypes.string,
};

export default PortfolioItems;
