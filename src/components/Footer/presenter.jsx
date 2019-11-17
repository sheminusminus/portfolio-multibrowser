import React from 'react';

import styles from './styles.module.css';

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.repo}>
      <a
        href="https://github.com/sheminusminus/portfolio-multibrowser"
        rel="noopener noreferrer"
        target="_blank"
      >
        psst... i run in vr. find out how here.
      </a>
    </div>

    <div className={styles.typical}>
      <p>{String.fromCharCode(9829)} made in chicago</p>
      <p>{String.fromCharCode(169)} emily kolar, {(new Date()).getFullYear()}</p>
    </div>
  </div>
);

export default Footer;
