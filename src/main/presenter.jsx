import React, { Component } from 'react';

import { Body, Footer, Header } from '../components';
import { ThemeProvider } from '../context';

import styles from './styles.css';

import theme from './theme.css';

class Main extends Component {
  render() {
    return (
      <ThemeProvider value={theme}>
        <div className={styles.main}>
          <Header />
          <Body />
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

export default Main;
