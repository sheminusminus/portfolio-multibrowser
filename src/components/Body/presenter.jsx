import React, { Component } from 'react';

import { Hero } from './components';

import styles from './styles.css';

class Body extends Component {
  render() {
    return (
      <div className={styles.body}>
        <Hero />
      </div>
    );
  }
}

export default Body;
