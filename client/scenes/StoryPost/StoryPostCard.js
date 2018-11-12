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

    const contentArray = content.replace(/<p>/gi, '').split('</p>');

    return (
      <div>
        <h3 className={styles.title}>{data.title}</h3>
        <p className={styles.date}>{data.date}</p>
        <p className={styles.blurb}>{data.blurb}</p>
        <p>{contentArray[0]}</p>
        {contentArray[1] && <p>{contentArray[1]}</p>}
      </div>
    );
  }
}
