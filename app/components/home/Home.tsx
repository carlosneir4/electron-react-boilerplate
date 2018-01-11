// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './Home.css';

export interface Props {
}

export default class Home extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Test React Redux</h2>
          <p>
            <Link to="/counter">Counter Actions</Link>
          </p>
          <p>
            <Link to="/directory">FS - Directory</Link>
          </p>
        </div>
      </div>
    );
  }
}
