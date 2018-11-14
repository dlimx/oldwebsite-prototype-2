import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavbarStyles.scss';

export default class Navbar extends Component {
  render() {
    return (
      <nav className={styles.navbar}>
        <NavLink
          className={styles.link}
          activeClassName={styles.linkActive}
          to="/about"
        >
          about
        </NavLink>
        <NavLink
          className={styles.link}
          activeClassName={styles.linkActive}
          to="/"
          exact
        >
          stories
        </NavLink>
        <NavLink
          className={styles.link}
          activeClassName={styles.linkActive}
          to="/work"
        >
          work
        </NavLink>
      </nav>
    );
  }
}
