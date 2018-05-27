import React, { Component } from 'react';

import { Hero } from './components';
import { withTheme } from '../../hoc';

import styles from './styles.css';

const HeroWithTheme = withTheme(Hero);

class Body extends Component {
  render() {
    return (
      <div className={styles.body}>
        <HeroWithTheme />
      </div>
    );
  }
}

export default Body;
