import React from 'react';
import { render } from 'react-dom';

import styles from './style.css';

console.log('HELLO');

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <p>My name is David Li !!!</p>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
