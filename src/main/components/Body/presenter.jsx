import React from 'react';

import { withTheme } from 'hoc';

import { Divider } from 'components';
import { Hero, Work } from './components';

import styles from './styles.module.css';

const HeroWithTheme = withTheme(Hero);
const WorkWithTheme = withTheme(Work);

const Body = () => (
  <div className={styles.body}>
    <HeroWithTheme />
    <Divider />
    <WorkWithTheme />
  </div>
);

export default Body;
