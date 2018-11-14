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
        <div className={classNames('column', 'column-60', styles.container)}>
          {data.posts.map((item, index) => (
            <StoryPostCard index={index} key={item.data.date} {...item} />
          ))}
        </div>
      </div>
    );
  }
}
