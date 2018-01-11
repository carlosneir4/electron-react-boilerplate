// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './Directory.css';


export interface DataProps {
}

export interface FuncProps {
}

interface Props extends DataProps, FuncProps { }

export default class Directory extends React.Component<Props, {}> {

  render() {

    const { dialog } = require('electron').remote;

    function selectDirectory() {
      dialog.showOpenDialog({
        properties: ['openFile']
      }, function (filename) {
        console.log(filename.toString());
      }
      );
    }

    return (
      <div >
        <div className={styles.backButton} data-tid="backButton">
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div onClick={() => selectDirectory()}> Directory </div>
      </div>
    );
  }
}
