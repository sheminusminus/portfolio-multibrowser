import React, { Component } from 'react';

import { classie } from '../../../../utils';

import { IntroIcon, IntroSkill, IntroLink } from './components';

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

          <p className={styles.subText}>
            <span className={theme.subheading}>
              <span>
                <IntroSkill text="full-stack javascript" />
                <IntroSkill text="ios" />
                <IntroSkill text="ux" />
              </span>

              <br />

              <span>
                <IntroLink text="work" href="#work" />
                <IntroLink text="talks" href="#talks" />
                <IntroLink text="open source" href="#openSource" />
              </span>
            </span>
          </p>

          <div className={styles.icons}>
            <IntroIcon className={styles.mail} href="./resume.pdf" />
            <IntroIcon className={styles.hub} href="https://github.com/sheminusminus" />
            <IntroIcon className={styles.lin} href="https://www.linkedin.com/in/emily-kolar-0bb63a54/" />
            <IntroIcon className={styles.lab} href="https://gitlab.com/sheminusminus" />
          </div>
        </div>
        <div className={styles.peek}>
        </div>
      </div>
    );
  }
}

export default Hero;
