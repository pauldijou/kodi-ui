import React from 'react';
import { addons } from 'react/addons';

export default React.createClass({
  mixins: [addons.PureRenderMixin],

  componentDidUpdate () {
    if (this.refs.code) {
      Prism.highlightElement(this.refs.code);
    }
  },

  render () {
    if (this.props.response === 'pending') {
      return (<div className='is-empty'>Pending...</div>);
    } else if (this.props.response) {
      return (<pre><code ref='code' className='language-javascript'>{JSON.stringify(this.props.response, null, 2)}</code></pre>);
    } else {
      return (<div className='is-empty'>No response yet</div>);
    }
  }
});
