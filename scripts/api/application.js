import React from 'react';
import { connect } from 'react-redux';
import { Action } from '../components';

export default connect((state)=> ({kodi: state.kodi}))(React.createClass({
  render () {
    const application = this.props.kodi.application;

    return (<div>
      <h2>Application</h2>
      <Action label='Get Volume' action={application.getVolume}/>
      <Action label='Is Muted' action={application.isMuted}/>
      <Action label='Get Name' action={application.getName}/>
      <Action label='Get Version' action={application.getVersion}/>
      <Action label='Mute' action={application.mute}/>
      <Action label='Unmute' action={application.unmute}/>
      <Action label='Toggle Mute' action={application.toggleMute}/>
      <Action label='Set Volume' action={application.setVolume}>
        <div><input type='number' key='arg0' defaultValue={50} placeholder='Volume' /></div>
      </Action>
      <Action label='Increment Volume' action={application.incrementVolume}/>
      <Action label='Decrement Volume' action={application.decrementVolume}/>
      <Action label='Quit' action={application.quit}/>
    </div>);
  }
}));
