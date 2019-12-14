import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const scrollOnClick = (evt) => {
  const targetId = evt.target.getAttribute('data-target');
  const element = document.querySelector(targetId);
  const bBox = element.getBoundingClientRect();
  const scrollTop = bBox.top - 70;

  window.scroll({
    top: scrollTop,
    left: 0,
    behavior: 'smooth',
  });
};

const IntroLink = ({ text, element }) => {
  const onClick = React.useCallback(scrollOnClick, []);

  return (
    <span
      className={styles.introLink}
      data-target={element}
      onClick={onClick}
    >
      <span data-target={element}>
        {text}
      </span>
    </span>
  );
};

IntroLink.propTypes = {
  element: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default IntroLink;
