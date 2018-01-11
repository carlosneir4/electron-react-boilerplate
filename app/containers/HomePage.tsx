// @flow
import * as React from 'react';
import Home from '../components/home/Home';

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
