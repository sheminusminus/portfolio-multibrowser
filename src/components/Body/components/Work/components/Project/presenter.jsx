import React from 'react';

import { classie } from '../../../../../../utils';

import styles from './styles.css';

const Project = ({
  title = '', href = '', image = '', images = [], isFeatured = false, last, type,
}) => {
  const className = classie([styles.project], { [styles.featured]: isFeatured });
  const imgClassNames = classie([styles.img], {
    [styles.iphone]: type === 'iphone',
  });

  const inner = (
    <div className={styles.imgWrapper}>
      <h5><span className={styles.accent} />{title}<span className={styles.accent} /></h5>

      {isFeatured ?
        images.map((i, idx) =>
          <img key={`featured-img-${idx}`} src={i} alt={`${title} ${idx}`} className={imgClassNames} />)
        : <img src={image} alt={title} className={styles.img} />}
    </div>
  );

  if (href) {
    return (
      <a href={href} className={className} target="_blank">
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

export default Project;
