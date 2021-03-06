import React, { Component } from 'react';
import ReactReduxContext from './context';

export default class Provider extends Component {
  render() {
    return (
      <ReactReduxContext.Provider value={{ store: this.props.store  }}>
        { this.props.children }
      </ReactReduxContext.Provider>
    )
  }
}