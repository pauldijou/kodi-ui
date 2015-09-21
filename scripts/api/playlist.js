import React from 'react';
import { connect } from 'react-redux';
import { Action } from '../components';

export default connect((state)=> ({kodi: state.kodi}))(React.createClass({
  render () {
    const playlist = this.props.kodi.playlist;

    return (<div>
      <h2>Playlist</h2>
      <Action label='Do' action={this.toto}/>
    </div>);
  }
}));
