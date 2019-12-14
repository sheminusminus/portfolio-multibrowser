import React from 'react';
import PropTypes from 'prop-types';

import { text } from 'appConstants';
import { EventUtils } from 'utils';

import styles from './styles.module.css';

const Footer = ({ setHideApp }) => (
  <div className={styles.footer}>
    <div className={styles.repo}>
      <a
        href="https://github.com/sheminusminus/portfolio-multibrowser"
        onClick={EventUtils.makeDispatchPreviewXrEvent(setHideApp)}
        rel="noopener noreferrer"
        target="_blank"
      >
        {text.footer.message}
      </a>
    </div>

    <div className={styles.typical}>
      <p> {text.footer.location}</p>
      <p>{text.footer.copyright}</p>
    </div>
  </div>
);

Footer.propTypes = {
  setHideApp: PropTypes.func.isRequired,
};

export default Footer;
