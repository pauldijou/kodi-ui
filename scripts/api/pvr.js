import React from 'react';
import { connect } from 'react-redux';
import { Action } from '../components';

export default connect((state)=> ({kodi: state.kodi}))(React.createClass({
  render () {
    const pvr = this.props.kodi.pvr;

    return (<div>
      <h2>PVR</h2>
      <Action label='Do' action={this.toto}/>
    </div>);
  }
}));
