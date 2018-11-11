import React, { Component } from 'react';
import classNames from 'classnames';

import data from '../../../public/blog.json';

import styles from './styles.scss';
import StoryPostCard from '../StoryPost/StoryPostCard';

export default class Stories extends Component {
  render() {
    return (
      <div className="row">
        <div className={classNames('column', styles.imageContainer)}>
          <div className={styles.image} alt="David Li's Profile" />
        </div>
        <div className={classNames('column', styles.storyContainer)}>
          <h1>David Li</h1>
          {data.posts.map(item => (
            <StoryPostCard key={item.data.date} {...item} />
          ))}
        </div>
      </div>
    );
  }
}
