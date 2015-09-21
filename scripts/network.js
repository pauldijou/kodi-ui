import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import Request from './request';
import Response from './response';
import config from './config';

export default connect((state)=> ({request: state.request, response: state.response, ui: state.ui}))(React.createClass({
  setBodyOnly () {
    config.setUI({ request: { body: this.refs.body.checked } })
  },

  render () {
    let className = 'response';
    if (this.props.response && this.props.response !== 'pending') {
      const isError = this.props.response.error || (this.props.response.body && this.props.response.body.error);
      className = classnames('response', {'is-success': !isError, 'is-fail': !!isError});
    }

    return (<div id='network'>
      <h2 className='request'>
        <span>Request</span>
        <div className='request-settings'>
          <label>
            <input ref='body' type='checkbox' defaultChecked={config.ui.request.body} onChange={this.setBodyOnly} />
            Body only
          </label>
        </div>
      </h2>
      <div id='request'>
        <div className='network-content'>
          <Request config={this.props.ui.request} request={this.props.request} />
        </div>
      </div>
      <h2 className={className}>Response</h2>
      <div id='response'>
        <div className='network-content'>
          <Response response={this.props.response} />
        </div>
      </div>
    </div>);
  }
}));
