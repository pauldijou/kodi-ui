import React from 'react';
import { connect } from 'react-redux';
import { Action } from '../components';

export default connect((state)=> ({kodi: state.kodi}))(React.createClass({
  // getInitialState () {
  //   return {
  //     songs: []
  //   };
  // },
  //
  // componentDidMount () {
  //   this.props.kodi.audio.getSongs(['title'], { end: 25 })
  //     .then(response=> response.json())
  //     .then(body=> {
  //       this.setState({ songs: body.result.songs || []});
  //     });
  // },

  paramsGetSongs (params) {
    params[1] = { start: params[1], end: params[2] };
    params.pop();
    return params;
  },

  render () {
    const audio = this.props.kodi.audio;

    // <select key='arg0' data-parse='number'>
    //   { this.state.songs.map(song=> <option key={song.songid} value={song.songid}>{song.label}</option>) }
    // </select>

    return (<div>
      <h2>Audio</h2>
      <Action label='Get Songs' action={audio.getSongs} params={this.paramsGetSongs}>
        <div>
          <select key='arg0' multiple={true} size='6' defaultValue={this.props.kodi.types.audio.fields.song}>
            <option disabled>Fields</option>
            { this.props.kodi.types.audio.fields.song.map((f)=> <option key={f} value={f}>{f}</option>) }
          </select>
        </div>
        <div>
          <input type='number' defaultValue='0' key='arg1' placeholder='Start' />
        </div>
        <div>
          <input type='number' defaultValue='25' key='arg2' placeholder='End' />
        </div>
      </Action>
      <Action label='Get Song Details' action={audio.getSongDetails}>
        <div>
          <input type='number' key='arg0' placeholder='Song ID' />
        </div>
        <div>
          <select key='arg1' multiple={true} size='6' defaultValue={this.props.kodi.types.audio.fields.song}>
            <option disabled>Fields</option>
            { this.props.kodi.types.audio.fields.song.map((f)=> <option key={f} value={f}>{f}</option>) }
          </select>
        </div>
      </Action>
      <Action label='Get Recently Played Songs' action={audio.getRecentlyPlayedSongs} params={this.paramsGetSongs}>
        <div>
          <select key='arg0' multiple={true} size='6' defaultValue={this.props.kodi.types.audio.fields.song}>
            <option disabled>Fields</option>
            { this.props.kodi.types.audio.fields.song.map((f)=> <option key={f} value={f}>{f}</option>) }
          </select>
        </div>
        <div>
          <input type='number' defaultValue='0' key='arg1' placeholder='Start' />
        </div>
        <div>
          <input type='number' defaultValue='25' key='arg2' placeholder='End' />
        </div>
      </Action>
    </div>);
  }
}));
