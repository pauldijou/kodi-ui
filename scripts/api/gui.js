import React from 'react';
import { connect } from 'react-redux';
import { Action } from '../components';

export default connect((state)=> ({kodi: state.kodi}))(React.createClass({
  render () {
    const gui = this.props.kodi.gui;

    return (<div>
      <h2>GUI</h2>
      <Action label='Activate Window' action={gui.activateWindow}>
        <div>
          <select key='arg0'>
            { this.props.kodi.types.gui.window.sort().map(w=> <option key={w} value={w}>{w}</option>) }
          </select>
        </div>
      </Action>
      <Action label='Activate Window' action={gui.activateWindow}>
        <div>
          <input list='activateWindowDataliste' key='arg0' type='text' placeholder='Window' />
          <datalist id='activateWindowDataliste'>
            { this.props.kodi.types.gui.window.sort().map(w=> <option key={w} value={w}></option>) }
          </datalist>
        </div>
      </Action>
      <Action label='Get Properties' action={gui.getProperties}>
        <div>
          <select key='arg0' multiple={true} defaultValue={this.props.kodi.types.gui.property}>
            <option disabled>Properties</option>
            { this.props.kodi.types.gui.property.map(p=> <option key={p} value={p}>{p}</option>) }
          </select>
        </div>
      </Action>
      <Action label='Fullscreen' action={gui.fullscreen} />
      <Action label='Windowed' action={gui.windowed} />
      <Action label='Toggle Fullscreen' action={gui.toggleFullscreen} />
      <h3>Notifications</h3>
      <Action label='Show Info' action={gui.showInfo}>
        <div><input type='text' key='arg0' placeholder='Title' /></div>
        <div><input type='text' key='arg1' placeholder='Message' /></div>
        <div><input type='number' key='arg2' placeholder='Display time' defaultValue='5000' /></div>
      </Action>
      <Action label='Show Warning' action={gui.showWarning}>
        <div><input type='text' key='arg0' placeholder='Title' /></div>
        <div><input type='text' key='arg1' placeholder='Message' /></div>
        <div><input type='number' key='arg2' placeholder='Display time' defaultValue='5000' /></div>
      </Action>
      <Action label='Show Error' action={gui.showError}>
        <div><input type='text' key='arg0' placeholder='Title' /></div>
        <div><input type='text' key='arg1' placeholder='Message' /></div>
        <div><input type='number' key='arg2' placeholder='Display time' defaultValue='5000' /></div>
      </Action>
      <Action label='Show Notification' action={gui.showNotification}>
        <div><input type='text' key='arg0' placeholder='Title' /></div>
        <div><input type='text' key='arg1' placeholder='Message' /></div>
        <div><input type='text' key='arg2' placeholder='Image' /></div>
        <div><input type='number' key='arg3' placeholder='Display time' defaultValue='5000' /></div>
      </Action>
    </div>);
  }
}));
