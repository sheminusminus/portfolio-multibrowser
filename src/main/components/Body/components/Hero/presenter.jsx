import React from 'react';
import PropTypes from 'prop-types';

import { text } from 'appConstants';
import { StringUtils } from 'utils';
import { intro } from 'data';

import { IntroIcon, IntroSkill, IntroLink } from 'components';

import styles from './styles.module.css';

// ======
// static children
// ======

const introSkills = (
  <span>
    {intro.skills.map((s) => (
      <IntroSkill text={s} key={s} />
    ))}
  </span>
);

const introLinks = (
  <span>
    {intro.links.map((l) => (
      <IntroLink text={l} element={`#${StringUtils.wordsToCamel(l)}`} key={l} />
    ))}
  </span>
);

const introIcons = (
  <div className={styles.icons}>
    {intro.icons.map((i) => (
      <IntroIcon className={styles[i.id]} href={i.href} key={i.id} />
    ))}
  </div>
);

const canvas = (
  <canvas
    className={styles.canvas}
    height={`${window.innerHeight}px`}
    id="canvas"
    width={`${window.innerWidth}px`}
  />
);

// ======
// component
// ======

const Hero = ({ theme }) => (
  <div id="header" className={styles.hero}>
    {canvas}

    <div className={styles.intro}>
      <p className={styles.introText}>
        <span className={theme.heading}>
          {text.hero.line1}
          <br/>
          {text.hero.line2}
          <br />
          {text.hero.line3}
        </span>
      </p>

      <p className={styles.subText}>
        <span className={theme.subheading}>
          {introSkills}

          <br />

          {introLinks}
        </span>
      </p>

      {introIcons}
    </div>

    <div className={styles.peek} />
  </div>
);

Hero.propTypes = {
  theme: PropTypes.shape().isRequired,
};

export default Hero;
