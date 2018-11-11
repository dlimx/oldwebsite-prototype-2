import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './StoryPostCardStyles.scss';

export default class StoryPostCard extends Component {
  static propTypes = {
    data: PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }).isRequired,
    content: PropTypes.string.isRequired,
  };

  render() {
    const { data, content } = this.props;

    return (
      <div>
        <h3>{data.title}</h3>
        <p>{data.date}</p>
        <p dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    );
  }
}
