import React from 'react';
import Menu from './menu';
import Network from './network';
import Notifications from './notifications';

export default React.createClass({
  render () {
    return (<div>
      <Menu />
      <div id='main'>
        <div id='content'>{this.props.children}</div>
        <Network />
      </div>
      <Notifications />
    </div>);
  }
});
