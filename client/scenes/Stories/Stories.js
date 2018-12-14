import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import data from '../../../public/blog.json';

import styles from './styles.scss';
import StoryPostCard from './StoryPostCard';
import Intro from '../../components/Intro';
import StoryPost from './StoryPost';

export default class Stories extends Component {
  static propTypes = {
    match: PropTypes.shape({
      isExact: PropTypes.bool.isRequired,
    }).isRequired,
  };

  render() {
    const detailsActive = !this.props.match.isExact;

    console.log(detailsActive, this.props);
    return (
      <div className={styles.scene}>
        <div
          className={classNames(
            'row',
            styles.mainContainer,
            detailsActive && styles.detailsActive,
          )}
        >
          <Intro />
          <div
            className={classNames('column', 'column-60', styles.listContainer)}
          >
            {data.posts.map(item => (
              <StoryPostCard
                goBack={!this.props.match.isExact}
                key={item.id}
                {...item}
              />
            ))}
          </div>
        </div>
        <StoryPost active={detailsActive} />
      </div>
    );
  }
}
