import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

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

    const truncatedContent = content.split('<hr>')[0];

    return (
      <div>
        <h3 className={styles.title}>{data.title}</h3>
        <p className={styles.date}>{data.date}</p>
        <p className={styles.blurb}>{data.blurb}</p>
        <p dangerouslySetInnerHTML={{ __html: truncatedContent }} />
      </div>
    );
  }
}
