import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import About from './About/About';
import Stories from './Stories/Stories';
import StoryPost from './Stories/StoryPost';
import Work from './Work/Work';
import NoRoute from './NoRoute/NoRoute';
import Navbar from '../components/Navbar';

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route
              path="/"
              exact
              component={() => <Redirect to="/stories" />}
            />
            <Route path="/stories" component={Stories} />
            <Route path="/stories/:id" component={StoryPost} />
            <Route path="/about" component={About} />
            <Route path="/work" component={Work} />
            <Route component={NoRoute} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
