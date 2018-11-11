import React, { Component } from 'react';

import data from '../../../public/blog.json';

import styles from './styles.scss';
import StoryPostCard from '../../components/StoryPostCard';

console.log(data);

export default class Stories extends Component {
  render() {
    return (
      <div className="row">
        <div className="column">
          <img
            src="https://images.unsplash.com/photo-1540202404-fad3e2190841?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5251a79c705d53dd1bf8ceda013e2b52&auto=format&fit=crop&w=1490&q=80"
            style={{
              objectFit: 'cover',
              height: window.innerHeight,
              width: '100%',
            }}
            alt="David Li's Profile"
          />
        </div>
        <div className="column">
          <h1>David Li</h1>
          {data.posts.map(item => (
            <StoryPostCard key={item.data.date} {...item} />
          ))}
        </div>
      </div>
    );
  }
}
