import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.scss';
import Intro from '../../components/Intro';

export default class Stories extends Component {
  render() {
    return (
      <div className="row">
        <Intro />
        <div className="column column-60">
          <div className={styles.container}>
            <h1 className={styles.error}>Error</h1>
            <p className={styles.error}>
              We seem to have encountered an error.
            </p>
            <Link to="/" className={styles.link}>
              Shall we try again?
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
