import React from 'react';
import { connect } from 'react-redux';
import { Action } from '../components';

export default connect((state)=> ({kodi: state.kodi}))(React.createClass({
  render () {
    const audio = this.props.kodi.audio;

    return (<div>
      <h2>Audio</h2>
      <Action label='Do' action={this.toto}/>
    </div>);
  }
}));
