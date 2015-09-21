import React from 'react';
import { connect } from 'react-redux';
import { Action } from '../components';

export default connect((state)=> ({kodi: state.kodi}))(React.createClass({
  render () {
    const jsonrpc = this.props.kodi.jsonrpc;
    console.log(jsonrpc);

    return (<div>
      <h2>JSON RPC</h2>
      <Action label='Introspect' action={jsonrpc.introspect}>

      </Action>
      <Action label='Notify All' action={jsonrpc.notifyAll}>
        <div><input type='text' key='arg0' placeholder='Sender' /></div>
        <div><input type='text' key='arg1' placeholder='Message' /></div>
        <div><input type='text' key='arg2' placeholder='Data' /></div>
      </Action>
      <Action label='Permission' action={jsonrpc.permission}/>
      <Action label='Ping' action={jsonrpc.ping}/>
      <Action label='Version' action={jsonrpc.version}/>
    </div>);
  }
}));
