import React from 'react';

import styles from './styles.css';

const OpenSource = ({
  title, image, href,
}) => {
  const inner = (
    <div className={styles.imgWrapper}>
      <h5>
        <span className={styles.accent} />
        {title}
        <span className={styles.accent} />
      </h5>

      <img src={image} alt={title} className={styles.img} />
    </div>
  );

  if (href) {
    return (
      <a target="_blank" href={href} className={styles.os}>
        {inner}
      </a>
    );
  }

  return (
    <div className={styles.os}>
      {inner}
    </div>
  );
};

export default OpenSource;
