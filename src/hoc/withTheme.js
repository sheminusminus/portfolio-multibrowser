import React from 'react';

import { ThemeConsumer } from 'context';

const withTheme = (Component) => {
  return (props) => (
    <ThemeConsumer>
      {theme => <Component theme={theme} {...props} />}
    </ThemeConsumer>
  );
};

export default withTheme;
