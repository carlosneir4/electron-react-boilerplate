// @flow
import * as React from 'react';

interface Props {
  children: any;
}

export default class App extends React.Component<Props> {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
