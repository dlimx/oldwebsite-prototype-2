import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './styles.scss';
import StaticImage from '../../components/StaticImage';

export default class Work extends Component {
  render() {
    return (
      <div className="row">
        <StaticImage />
        <div className={classNames('column', styles.container)}>
          <h3>WORK WORK WORK</h3>
        </div>
      </div>
    );
  }
}
