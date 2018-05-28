import React from 'react';

import styles from './styles.css';

const Project = ({ title }) => (
  <div className={styles.project}>
    <h3>{title}</h3>
  </div>
);

export default Project;
