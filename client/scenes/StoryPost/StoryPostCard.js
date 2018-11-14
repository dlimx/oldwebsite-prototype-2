import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { format } from 'date-fns';

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
      <Link
        to={`/stories:index${index}`}
        className={classNames(styles.card, `color-${(index % 5) + 1}`)}
      >
        <div>
          <p className={styles.text}>{String((index + 1) / 1000).slice(1)}</p>
          <p className={styles.date}>{format(data.date, 'MMMM DD, YYYY')}</p>
        </div>
        <div>
          <p className={styles.blurb}>{data.blurb}</p>
          <h3 className={styles.title}>{data.title}</h3>
        </div>
      </Link>
    );
  }
}
