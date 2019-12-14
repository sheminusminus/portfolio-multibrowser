import React from 'react';

import { classie } from 'utils';

import { ThemeProvider } from 'context';

import { Body, Footer, Header, XR } from './components';

import styles from './styles.module.css';
import theme from './theme.module.css';

const Main = () => {
  const [hideApp, setHideApp] = React.useState(false);

  return (
    <ThemeProvider value={theme}>
      <div className={styles.main}>
        <div className={classie({ hide: hideApp })}>
          <Header />
          <Body />
          <Footer setHideApp={setHideApp} />
        </div>

        <XR setHideApp={setHideApp} />
      </div>
    </ThemeProvider>
  );
};

export default Main;
