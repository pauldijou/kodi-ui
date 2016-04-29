import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

export default connect((state)=> ({notifications: state.notifications}))(React.createClass({
  render () {
    const notifs = this.props.notifications.map(notif => {
      return (<li key={notif.timestamp} className='notification'>
        <h4>{notif.method}</h4>
        <p>{JSON.stringify(notif.data)}</p>
      </li>);
    });

    return (<ul className='notifications'>
      { notifs }
    </ul>);
  }
}));
