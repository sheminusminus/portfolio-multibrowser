import React from 'react';

import styles from './styles.css';

const IntroLink = ({ text, href }) => (
  <span className={styles.introLink}>
    <a href={href}>{text}</a>
  </span>
);

export default IntroLink;
