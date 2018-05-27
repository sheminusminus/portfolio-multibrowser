import React, { Component } from 'react';

import { classie } from '../../../../utils';

import styles from './styles.css';

class Hero extends Component {
  render() {
    const { theme } = this.props;

    return (
      <div className={styles.hero}>
        <div className={styles.intro}>
          <p className={styles.introText}>
            <span className={classie([theme.heading])}>
              hi! i'm emily.
              <br/>
              i love to build things.
              <br />
              for the web, ios, and beyond.
            </span>

            <span className={styles.summary}>
              full-stack javascript | ui | ux
              <br />
              react | node | swift | react native
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default Hero;
