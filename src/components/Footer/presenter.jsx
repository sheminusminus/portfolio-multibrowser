import React from 'react';

import styles from './styles.module.css';

const makeDispatchPreviewXrEvent = setHideApp => (evt) => {
  evt.preventDefault();
  setHideApp(true);
  window.xrSessionSupported = false;
  window.dispatchEvent(window.prepXrEvent);
};

const Footer = ({ setHideApp }) => (
  <div className={styles.footer}>
    <div className={styles.repo}>
      <a
        href="https://github.com/sheminusminus/portfolio-multibrowser"
        onClick={makeDispatchPreviewXrEvent(setHideApp)}
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
