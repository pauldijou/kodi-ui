import React from 'react';

export default React.createClass({
  render () {
    return (<div className='field'>
      <label className='field-label'>{this.props.label}</label>
      <div className='field-input'>
        {this.props.children}
      </div>
    </div>);
  }
});
