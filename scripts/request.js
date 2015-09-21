import React from 'react';

export default React.createClass({
  componentDidUpdate () {
    if (this.refs.code) {
      Prism.highlightElement(this.refs.code);
    }
  },

  render () {
    if (this.props.request) {
      let display;

      if (this.props.config.body) {
        display = JSON.parse(this.props.request.body || '""');
      } else {
        display = Object.assign({}, this.props.request);

        if (display.body) {
          display.body = JSON.parse(display.body || '""');
        }
      }

      return (<pre><code ref='code' className='language-javascript'>{JSON.stringify(display, null, 2)}</code></pre>);
    } else {
      return (<div className='is-empty'>No request yet</div>);
    }
  }
});
