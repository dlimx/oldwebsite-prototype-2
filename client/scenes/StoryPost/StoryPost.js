import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

export default class StoryPost extends Component {
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
        <h1 className={styles.title}>{data.title}</h1>
        <p className={styles.date}>{data.date}</p>
        <p dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    );
  }
}
