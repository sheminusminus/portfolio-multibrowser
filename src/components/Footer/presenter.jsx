import React, { Component } from 'react';

import styles from './styles.css';

class Footer extends Component {
  render() {
    return (
      <div className={styles.footer}>
        <p>{String.fromCharCode(9829)} made in chicago</p>
        <p>{String.fromCharCode(169)} emily kolar, 2018</p>
      </div>
    );
  }
}

export default Footer;
