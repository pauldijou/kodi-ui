import React from 'react';
import { connect } from 'react-redux';
import { Action } from '../components';

export default connect((state)=> ({kodi: state.kodi}))(React.createClass({
  render () {
    const system = this.props.kodi.system;

    return (<div>
      <h2>System</h2>
      <Action label='Get Properties' action={system.getProperties}>
        <div>
          <select multiple={true} key='arg0' size='5' defaultValue={this.props.kodi.types.system.property.name}>
            <option disabled>Properties</option>
            {this.props.kodi.types.system.property.name.sort().map(p=> <option key={p} value={p}>{p}</option>)}
          </select>
        </div>
      </Action>
      <Action label='Eject optical drive' action={system.ejectOpticalDrive} />
      <Action label='Hibernate' action={system.hibernate} />
      <Action label='Reboot' action={system.reboot} />
      <Action label='Shutdown' action={system.shutdown} />
      <Action label='Suspend' action={system.suspend} />
    </div>);
  }
}));
