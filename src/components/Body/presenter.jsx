import React, { Component } from 'react';

import { Divider, Hero, Work } from './components';
import { withTheme } from '../../hoc';

import styles from './styles.css';

const HeroWithTheme = withTheme(Hero);
const WorkWithTheme = withTheme(Work);

class Body extends Component {
  render() {
    return (
      <div className={styles.body}>
        <HeroWithTheme />
        <Divider />
        <WorkWithTheme />
      </div>
    );
  }
}

export default Body;
