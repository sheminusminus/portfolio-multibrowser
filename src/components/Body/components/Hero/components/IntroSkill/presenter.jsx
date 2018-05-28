import React from 'react';

import { classie } from '../../../../../../utils';

import styles from './styles.css';

const IntroIcon = ({ className, href }) => (
  <a href={href} target="_blank" className={styles.iconLink}>
    <span className={classie([styles.icon, className])} />
  </a>
);

export default IntroIcon;
