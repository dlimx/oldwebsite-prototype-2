import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import About from './About/About';
import Stories from './Stories/Stories';
import Work from './Work/Work';
import Navbar from '../components/Navbar';

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route path="/" exact component={About} />
          <Route path="/about" component={About} />
          <Route path="/stories" component={Stories} />
          <Route path="/work" component={Work} />
        </div>
      </BrowserRouter>
    );
  }
}
