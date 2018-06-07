import React, { Component } from 'react';

import styles from './styles.css';

class Footer extends Component {
  render() {
    return (
      <div className={styles.footer}>
        <div className={styles.repo}>
          <a href="https://github.com/sheminusminus/portfolio-multibrowser" target="_blank">
            the repo for this site
          </a>
        </div>
        <div className={styles.typical}>
          <p>{String.fromCharCode(9829)} made in chicago</p>
          <p>{String.fromCharCode(169)} emily kolar, 2018</p>
        </div>
      </div>
    );
  }
}

export default Footer;
