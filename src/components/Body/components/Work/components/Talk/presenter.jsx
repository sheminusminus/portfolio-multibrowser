import React from 'react';

import styles from './styles.css';

const Talk = ({ title }) => (
  <div className={styles.talk}>
    <h3>{title}</h3>
  </div>
);

export default Talk;
