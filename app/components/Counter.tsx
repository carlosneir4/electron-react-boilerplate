// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './Counter.css';

export interface DataProps {
  counter: number
}

export interface FuncProps {
  increment: () => void,
  incrementIfOdd: () => void,
  incrementAsync: () => void,
  decrement: () => void,
}

interface Props extends DataProps, FuncProps { }

export default class Counter extends React.Component<Props, {}> {

  render() {

    return (
      <div >
        <div className={styles.backButton} data-tid="backButton">
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={`counter ${styles.counter}`} data-tid="counter">
          {this.props.counter}
        </div>
        <div className={styles.btnGroup}>
          <button className={styles.btn} onClick={this.props.increment} data-tclass="btn">
            <i className="fa fa-plus" />
          </button>
          <button className={styles.btn} onClick={this.props.decrement} data-tclass="btn">
            <i className="fa fa-minus" />
          </button>
          <button className={styles.btn} onClick={this.props.incrementIfOdd} data-tclass="btn">odd</button>
          <button className={styles.btn} onClick={() => this.props.incrementAsync()} data-tclass="btn">async</button>
        </div>
      </div>
    );
  }
}
