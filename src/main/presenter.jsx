import React, { Component } from 'react';

import { Body, Footer, Header } from '../components';

import styles from './styles.css';

class Main extends Component {
  render() {
    return (
      <div className={styles.main}>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default Main;
