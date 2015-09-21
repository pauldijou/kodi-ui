import React from 'react';
import { connect } from 'react-redux';
import { Action } from '../components';

export default connect((state)=> ({kodi: state.kodi}))(React.createClass({
  render () {
    const kodi = this.props.kodi.kodi;

    return (<div>
      <h2>Kodi</h2>
      <Action label='Do' action={this.toto}/>
    </div>);
  }
}));
