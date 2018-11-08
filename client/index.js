import React from 'react';
import { render } from 'react-dom';

import Router from './scenes/Router';

import './theme/base.scss';

class App extends React.Component {
  render() {
    return <Router />;
  }
}

render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
