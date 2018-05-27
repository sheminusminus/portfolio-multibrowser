import React, { Component } from 'react';

import styles from './styles.css';

class Hero extends Component {
  render() {
    return (
      <div className={styles.hero}>
        <div className={styles.intro}>
          <p>
            <span className={styles.hello}>
              hi! i'm emily.

              i love to build things.

              for the web, ios, and beyond.
            </span>

            <span className={styles.summary}>
              full-stack javascript | ui | ux
              <br />
              node | react | swift | react native
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default Hero;
