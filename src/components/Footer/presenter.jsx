import React from 'react';

import { EventUtils } from 'utils';

import styles from './styles.module.css';


const Footer = ({ setHideApp }) => (
  <div className={styles.footer}>
    <div className={styles.repo}>
      <a
        href="https://github.com/sheminusminus/portfolio-multibrowser"
        onClick={EventUtils.makeDispatchPreviewXrEvent(setHideApp)}
      >
        psst... i run in xr too. want a preview?
      </a>
    </div>

    <div className={styles.typical}>
      <p>{String.fromCharCode(9829)} made in chicago</p>
      <p>{String.fromCharCode(169)} emily kolar, {(new Date()).getFullYear()}</p>
    </div>
  </div>
);

export default Footer;
