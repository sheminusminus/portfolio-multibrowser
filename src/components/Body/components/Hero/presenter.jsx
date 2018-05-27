import React, { Component } from 'react';

import { classie } from '../../../../utils';

import styles from './styles.css';

class Hero extends Component {
  render() {
    const { theme } = this.props;

    return (
      <div id="header" className={styles.hero}>
        <canvas
          id="canvas"
          className={styles.canvas}
          width={`${window.innerWidth}px`}
          height={`${window.innerHeight}px`} />
        <div className={styles.intro}>
          <p className={styles.introText}>
            <span className={theme.heading}>
              hi, i'm emily.
              <br/>
              i love to build things.
              <br />
              for the web, ios, and beyond.
            </span>
          </p>

          <div className={styles.icons}>
            <span className={classie([styles.icon, styles.mail])} />
            <span className={classie([styles.icon, styles.hub])} />
            <span className={classie([styles.icon, styles.lin])} />
            <span className={classie([styles.icon, styles.lab])} />
          </div>

          <p className={styles.subText}>
            <span className={theme.subheading}>
              full-stack javascript | ui | ux
              <br />
              react | node | swift | react native
            </span>
          </p>
        </div>

        <div className={styles.peek}>
        </div>
      </div>
    );
  }
}

export default Hero;
