import React from 'react';

import styles from './styles.css';

const Project = ({ title, href, image }) => {
  const inner = (
    <div className={styles.imgWrapper}>
      <img src={image} alt={title} className={styles.img} />
    </div>
  );
};

export default Project;
