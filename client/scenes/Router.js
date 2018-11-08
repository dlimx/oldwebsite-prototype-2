import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import About from './About/About';
import Stories from './Stories/Stories';
import Work from './Work/Work';

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>David Li</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/stories">Stories</Link>
              </li>
              <li>
                <Link to="/work">Work</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={About} />
          <Route path="/about" component={About} />
          <Route path="/stories" component={Stories} />
          <Route path="/work" component={Work} />
        </div>
      </BrowserRouter>
    );
  }
}
