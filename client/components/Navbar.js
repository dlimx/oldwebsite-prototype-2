import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import styles from './NavbarStyles.scss';

export default class Navbar extends Component {
  render() {
    return (
      <nav className={classNames('row', styles.navbar)}>
        <Link to="/">
          <h1 className={styles.title}>David Li</h1>
        </Link>
        <Link className={styles.link} to="/about">
          About
        </Link>
        <Link className={styles.link} to="/stories">
          Stories
        </Link>
        <Link className={styles.link} to="/work">
          Work
        </Link>
      </nav>
    );
  }
}
