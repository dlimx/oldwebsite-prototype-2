import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { format } from 'date-fns';

import styles from './StoryPostStyles.scss';

export default class StoryPostCard extends Component {
  static propTypes = {
    data: PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }).isRequired,
    id: PropTypes.number.isRequired,
    goBack: PropTypes.bool.isRequired,
  };

  render() {
    const { data, id, goBack } = this.props;

    const color = `color-${((id - 1) % 5) + 1}`;

    return (
      <Link
        to={goBack ? '/stories' : `/stories/${id}`}
        className={classNames(styles.card, color)}
      >
        <div>
          <p className={styles.text}>{String(id / 1000).slice(1)}</p>
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
