import React from 'react';
import { connect } from 'react-redux';
import { Action } from '../components';

export default connect((state)=> ({kodi: state.kodi}))(React.createClass({
  paramsAddons (params) {
    if (params[0] === '') {
      params[0] = this.props.kodi.types.addons.types[0];
    }

    if (params[1] === '') {
      params[1] = undefined;
    }

    if (params[2] === '') {
      params[2] = undefined;
    } else if (params[2] === 'true') {
      params[2] = true;
    } else if (params[2] === 'false') {
      params[2] = false;
    }

    return params;
  },

  render () {
    const addons = this.props.kodi.addons;

    return (<div>
      <h2>Addons</h2>
      <Action label='Get Addons' action={addons.getAddons} params={this.paramsAddons}>
        <div>
          <select key='arg0'>
            <option value=''>Type</option>
            { this.props.kodi.types.addons.types.map((type)=> <option key={type} value={type}>{type}</option>) }
          </select>
        </div>
        <div>
          <select key='arg1'>
            <option value=''>Content</option>
            { this.props.kodi.types.addons.content.map((c)=> <option key={c} value={c}>{c}</option>) }
          </select>
        </div>
        <div>
          <select key='arg2'>
          <option value=''>Enabled</option>
            <option value='all'>all</option>
            <option value='true'>enabled</option>
            <option value='false'>disabled</option>
          </select>
        </div>
        <div>
          <select key='arg3' multiple={true} size='6' defaultValue={this.props.kodi.types.addons.fields}>
            <option disabled>Fields</option>
            { this.props.kodi.types.addons.fields.map((f)=> <option key={f} value={f}>{f}</option>) }
          </select>
        </div>
      </Action>
      <Action label='Get Addon Details' action={addons.getAddonDetails}>
        <div><input key='arg0' type='text' placeholder='Addon ID' defaultValue='' /></div>
        <div>
          <select key='arg1' multiple={true} size='6' defaultValue={this.props.kodi.types.addons.fields}>
            <option disabled>Fields</option>
            { this.props.kodi.types.addons.fields.map((f)=> <option key={f} value={f}>{f}</option>) }
          </select>
        </div>
      </Action>
      <Action label='Enable Addon' action={addons.enableAddon}>
        <div><input key='arg0' type='text' placeholder='Addon ID' defaultValue='' /></div>
      </Action>
      <Action label='Disable Addon' action={addons.disableAddon}>
        <div><input key='arg0' type='text' placeholder='Addon ID' defaultValue='' /></div>
      </Action>
      <Action label='Toggle Addon' action={addons.toggleAddon}>
        <div><input key='arg0' type='text' placeholder='Addon ID' defaultValue='' /></div>
      </Action>
    </div>);
  }
}));
