import React, { Component } from 'react';
import classNames from 'classnames';

import data from '../../../public/blog.json';

import styles from './styles.scss';
import StoryPostCard from '../StoryPost/StoryPostCard';
import Intro from '../../components/Intro';

export default class Stories extends Component {
  render() {
    return (
      <div className="row">
        <Intro />
        <div className={classNames('column', styles.container)}>
          <h1>Stories</h1>
          {data.posts.map(item => (
            <StoryPostCard key={item.data.date} {...item} />
          ))}
        </div>
      </div>
    );
  }
}
