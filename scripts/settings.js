import React from 'react';
import config from './config';
import { Field } from './components';

export default React.createClass({
  save () {
    const data = {
      ip: this.refs.ip.value,
      port: {
        http: this.refs.http.value,
        tcp: this.refs.tcp.value
      },
      username: this.refs.username.value,
      password: this.refs.password.value,
      method: this.refs.method.value
    };

    config.saveSettings(data);
  },

  handleChange () {
    this.save();
  },

  render () {
    return (<div>
      <h2>Settings</h2>
      <Field label='IP'><input ref='ip' type='text' defaultValue={config.settings.ip || 'localhost'} onChange={this.handleChange} /></Field>
      <Field label='Port HTTP'><input ref='http' type='text' defaultValue={config.settings.port.http || '8080'} onChange={this.handleChange} /></Field>
      <Field label='Port TCP'><input ref='tcp' type='text' defaultValue={config.settings.port.tcp || '9090'} onChange={this.handleChange} /></Field>
      <Field label='Username'><input ref='username' type='text' defaultValue={config.settings.username} onChange={this.handleChange} /></Field>
      <Field label='Password'><input ref='password' type='password' defaultValue={config.settings.password} onChange={this.handleChange} /></Field>
      <Field label='RPC Method'>
        <select ref='method' defaultValue={config.settings.method} onChange={this.handleChange}>
          <option value='post'>POST</option>
          <option value='get'>GET</option>
        </select>
      </Field>
    </div>);
  }
})
