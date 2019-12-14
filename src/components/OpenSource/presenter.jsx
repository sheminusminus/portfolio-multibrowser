import React from 'react';
import PropTypes from 'prop-types';

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

      {!!images && (
        <div className={styles.multiImage}>
          {images.map(img => (
            <img key={img} src={img} alt={title} className={styles.img} />
          ))}
        </div>
      )}

      {!images && <img src={image} alt={title} className={styles.img} />}
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

OpenSource.propTypes = {
  href: PropTypes.string,
  image: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

OpenSource.defaultProps = {
  href: undefined,
  image: undefined,
  images: undefined,
};

export default OpenSource;
