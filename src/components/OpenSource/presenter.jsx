import React from 'react';

import styles from './styles.module.css';

const OpenSource = ({
  href,
  image,
  images,
  title,
}) => {
  const inner = (
    <div className={styles.imgWrapper}>
      <h5>
        <span className={styles.accent} />
        {title}
        <span className={styles.accent} />
      </h5>

      {!!images && images.length > 0 &&
        <div className={styles.multiImage}>
          {images.map((img, idx) => (
            <img key={`os-img-${idx}`} src={img} alt={title} className={styles.img} />
          ))}
        </div>}

      {(!images || images.length === 0) &&
        <img src={image} alt={title} className={styles.img} />}
    </div>
  );

  if (href) {
    return (
      <a
        className={styles.os}
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
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
