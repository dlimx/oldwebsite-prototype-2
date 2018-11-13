import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './IntroStyles.scss';

export default class Intro extends Component {
  render() {
    return (
      <div className={classNames('column', 'column-40', styles.container)}>
        <div className={styles.fixedContainer}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>David Li</h1>
          </div>
        </div>
      </div>
    );
  }
}
