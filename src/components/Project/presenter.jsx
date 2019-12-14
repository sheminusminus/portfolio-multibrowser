import React from 'react';
import PropTypes from 'prop-types';

import { classie } from 'utils';

import styles from './styles.module.css';

const Project = ({
  href,
  image,
  images,
  isFeatured,
  title,
  type,
}) => {
  const isIphone = type === 'iphone';

  const className = classie([
    styles.project], {
      [styles.featured]: isFeatured,
    },
  );

  const imgClassNames = classie(
    [styles.img], {
      [styles.iphone]: type === 'iphone',
    },
  );

  const inner = (
    <div className={styles.imgWrapper}>
      <h5><span className={styles.accent} />{title}<span className={styles.accent} /></h5>

      {isFeatured || isIphone ?
        images.map((i, idx) =>
          <img key={`featured-img-${idx}`} src={i} alt={`${title} ${idx}`} className={imgClassNames} />)
        : <img src={image} alt={title} className={styles.img} />}
    </div>
  );

  if (href) {
    return (
      <a
        className={className}
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {inner}
      </a>
    );
  }

  return (
    <div className={className}>
      {inner}
    </div>
  );
};

Project.propTypes = {
  href: PropTypes.string,
  image: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
  isFeatured: PropTypes.bool,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

Project.defaultProps = {
  href: undefined,
  image: undefined,
  isFeatured: false,
};

export default Project;
