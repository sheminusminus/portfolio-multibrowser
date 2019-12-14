import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const IntroSkill = ({ text }) => (
  <span className={styles.introSkill}>{text}</span>
);

IntroSkill.propTypes = {
  text: PropTypes.string.isRequired,
};

export default IntroSkill;
