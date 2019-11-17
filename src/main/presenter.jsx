import React from 'react';

import { Body, Footer, Header } from 'components';
import { ThemeProvider } from 'context';

import styles from './styles.module.css';

import theme from './theme.module.css';

const Main = () => (
  <ThemeProvider value={theme}>
    <div className={styles.main}>
      <Header />
      <Body />
      <Footer />
    </div>
  </ThemeProvider>
);

export default Main;
