import React, { Component } from 'react';

import { Divider, Hero, Work } from './components';
import { withTheme } from '../../hoc';

import styles from './styles.css';

const HeroWithTheme = withTheme(Hero);

class Body extends Component {
  render() {
    return (
      <div className={styles.body}>
        <HeroWithTheme />
        <Divider />
        <Work />
      </div>
    );
  }
}

export default Body;
