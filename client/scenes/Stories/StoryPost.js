import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { format } from 'date-fns';

import styles from './StoryPostStyles.scss';

export default class StoryPost extends Component {
  static propTypes = {
    data: PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }).isRequired,
    content: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
  };

  render() {
    const { data, content, index } = this.props;
    if (!data) return <h1>asdasdasdasd</h1>;

    return (
      <div>
        <h1 className={styles.title}>{data.title}</h1>
        <p className={styles.text}>{String((index + 1) / 1000).slice(1)}</p>
        <p className={styles.date}>{format(data.date, 'MMMM DD, YYYY')}</p>
        <p dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    );
  }
}
