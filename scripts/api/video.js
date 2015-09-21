import React from 'react';
import { connect } from 'react-redux';
import { Action } from '../components';

export default connect((state)=> ({kodi: state.kodi}))(React.createClass({
  render () {
    const videos = this.props.kodi.videos;

    return (<div>
      <h2>Video</h2>
      <Action label='Do' action={this.toto}/>
    </div>);
  }
}));
