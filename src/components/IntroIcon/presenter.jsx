import React from 'react';
import PropTypes from 'prop-types';

import { classie } from 'utils';

import styles from './styles.module.css';

const IntroIcon = ({ className, href }) => (
  <a
    className={styles.iconLink}
    href={href}
    rel="noopener noreferrer"
    target="_blank"
  >
    <span className={classie([styles.icon, className])} />
  </a>
);

IntroIcon.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
};

IntroIcon.defaultProps = {
  className: undefined,
};

export default IntroIcon;
