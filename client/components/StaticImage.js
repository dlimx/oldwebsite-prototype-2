import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './StaticImageStyles.scss';

export default class StaticImage extends Component {
  render() {
    return (
      <div className={classNames('column', 'column-40', styles.imageContainer)}>
        <div className={styles.image} alt="David Li's Profile">
          <div className={styles.imageOverlay} />
          <div className={styles.textContainer}>
            <h1 className={styles.title}>David Li</h1>
          </div>
        </div>
      </div>
    );
  }
}
