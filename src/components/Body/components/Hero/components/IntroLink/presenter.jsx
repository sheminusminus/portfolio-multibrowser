import React from 'react';

import styles from './styles.css';

const IntroLink = ({ text, element }) => {
  function scrollOnClick() {
    const bBox = document.querySelector(element).getBoundingClientRect();
    const scrollTop = bBox.top - 60;
    window.scroll({
      top: scrollTop,
      left: 0,
      behavior: 'smooth',
    });
  }

  return (
    <span
      onClick={scrollOnClick}
      className={styles.introLink}>
      <span>{text}</span>
    </span>
  );
};

export default IntroLink;
