import React from 'react';
import Menu from './menu';
import Network from './network';

export default React.createClass({
  render () {
    return (<div>
      <Menu />
      <div id='main'>
        <div id='content'>{this.props.children}</div>
        <Network />
      </div>
    </div>);
  }
});
