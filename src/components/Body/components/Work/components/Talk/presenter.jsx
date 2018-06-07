import React from 'react';

import styles from './styles.css';

const Talk = ({
  title, image, href, date, venue,
}) => {
  const inner = (
    <div className={styles.imgWrapper}>
      <h5>
        <span className={styles.accent} />
        {title}
        <span className={styles.accent} />
      </h5>

      <h6 className={styles.talkInfo}>
        <span className={styles.date}>{date}</span>
        <span> • </span>
        <span className={styles.venue}>{venue}</span>
      </h6>

      <img src={image} alt={title} className={styles.img} />
    </div>
  );

  if (href) {
    return (
      <a target="_blank" href={href} className={styles.talk}>
        {inner}
      </a>
    );
  }

  return (
    <div className={styles.talk}>
      {inner}
    </div>
  );
};

export default Talk;
