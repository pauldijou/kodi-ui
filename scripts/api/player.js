import React from 'react';
import { connect } from 'react-redux';
import { Action } from '../components';

export default connect((state)=> ({kodi: state.kodi}))(React.createClass({
  render () {
    const player = this.props.kodi.player;

    return (<div>
      <h2>Player</h2>
      <Action label='Get active players' action={player.getActivePlayers}/>
      <Action label='Get Item' action={player.getItem}>
        <div><input type='number' key='arg0' defaultValue='0' placeholder='Player ID' /></div>
      </Action>
      <Action label='Play' action={player.play}>
        <div><input type='number' key='arg0' defaultValue='0' placeholder='Player ID' /></div>
      </Action>
      <Action label='Pause' action={player.pause}>
        <div><input type='number' key='arg0' defaultValue='0' placeholder='Player ID' /></div>
      </Action>
      <Action label='Open Playlist' action={player.openPlaylist}>
        <div><input type='number' key='arg0' defaultValue='0' placeholder='Player ID' /></div>
        <div><input type='number' key='arg1' defaultValue='0' placeholder='Position' /></div>
      </Action>
    </div>);
  }
}));
