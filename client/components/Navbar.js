import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './NavbarStyles.scss';

export default class Navbar extends Component {
  render() {
    return (
      <nav className={styles.navbar}>
        <Link to="/">
          <h1 className={styles.title}>David Li</h1>
        </Link>
        <Link className={styles.link} to="/">
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
