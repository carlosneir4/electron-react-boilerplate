// @flow
import * as React from 'react';
import Home from '../components/Home';

interface Props {
  children: any;
}

export default class HomePage extends React.Component<Props> {
  render() {
    return (
      <Home />
    );
  }
}
