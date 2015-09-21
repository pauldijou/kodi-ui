import React from 'react';
import { connect } from 'react-redux';
import { Action } from '../components';

export default connect((state)=> ({kodi: state.kodi}))(React.createClass({
  render () {
    const input = this.props.kodi.input;

    return (<div>
      <h2>Input</h2>
      <Action label='Select' action={input.execute.select}/>
      <Action label='Back' action={input.back}/>
      <Action label='Up' action={input.up}/>
      <Action label='Down' action={input.down}/>
      <Action label='Left' action={input.left}/>
      <Action label='Right' action={input.right}/>
      <Action label='Context Menu' action={input.contextMenu}/>
      <Action label='Home' action={input.home}/>
      <Action label='Info' action={input.info}/>
      <Action label='Send Text' action={input.sendText}>
        <div><input key='arg1' type='text' placeholder='Text' /></div>
        <label>Done<input key='arg2' type='checkbox' /></label>
      </Action>
      <Action label='Show Codec' action={input.showCodec} />
      <Action label='Show OSD' action={input.showOSD}/>
      <h3>Actions</h3>
      {
        Object.keys(input.execute).map((k)=> <Action key={k} label={'Execute '+k} action={input.execute[k]} />)
      }
    </div>);
  }
}));
