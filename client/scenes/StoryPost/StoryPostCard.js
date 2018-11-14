import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import styles from './styles.scss';

export default class StoryPostCard extends Component {
  static propTypes = {
    data: PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
  };

  render() {
    const { data, index } = this.props;

    return (
      <div className={classNames(styles.card, `color-${(index % 5) + 1}`)}>
        <div>
          <p className={styles.text}>{index}</p>
          <p className={styles.date}>{data.date}</p>
        </div>
        <div>
          <p className={styles.blurb}>{data.blurb}</p>
          <h3 className={styles.title}>{data.title}</h3>
        </div>
      </div>
    );
  }
}
