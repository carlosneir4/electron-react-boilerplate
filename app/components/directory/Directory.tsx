// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './Directory.css';
import { directoryStateType } from '../../reducers/directory';
import { DialogAction } from '../../actions/dialog';


export interface DataProps {
  directory: directoryStateType;
}

export interface FuncProps {
  openDialog: () => DialogAction;
}

interface Props extends DataProps, FuncProps { }

export default class Directory extends React.Component<Props, {}> {


  getPath() {
    if (this.props.directory.path === '') {
      return 'Selec one directory';
    }
    return this.props.directory.path;
  }

  render() {
    return (
      <div >
        <div className={styles.backButton} data-tid="backButton">
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>

        <div className={styles.container} data-tid="container">
          <div onClick={() => this.props.openDialog()}> Find Directory ... </div>
          <h5>Current path : {this.getPath()}</h5>
        </div>
      </div>
    );
  }
}
