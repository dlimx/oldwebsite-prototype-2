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
          <Route path="/" exact component={Stories} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
        </div>
      </BrowserRouter>
    );
  }
}
