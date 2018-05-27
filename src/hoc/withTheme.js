import React from 'react';

import { ThemeConsumer } from '../context';

function withTheme(Component) {
  return class ComponentWithTheme extends React.Component {
    render() {
      return (
        <ThemeConsumer>
          {theme => <Component theme={theme} {...this.props} />}
        </ThemeConsumer>
      );
    }
  };
}

export default withTheme;
