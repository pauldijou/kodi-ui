import React from 'react';
import classnames from 'classnames';

export default React.createClass({
  getInitialState () {
    return {
      active: false
    };
  },

  extractArgs () {
    return Object.keys(this.refs).sort().map((ref)=> {
      const input = this.refs[ref];
      if (input.type === 'number' || input.dataset.parse === 'number') {
        return (input.value !== undefined && input.value !== '') ? parseInt(input.value, 10) : input.value;
      } else if (input.type === 'checkbox') {
        return input.checked;
      } else if (input.type === 'select-multiple') {
        const arg = [];
        for (let i = 0, l = input.options.length; i < l; ++i) {
          const option = input.options[i];
          if (option.selected) {
            arg.push(option.value);
          }
        }
        return arg;
      } else {
        return input.value;
      }
    });
  },

  assignRef (child) {
    if (child.key && child.key.indexOf('arg') === 0) {
      return React.cloneElement(child, {ref: child.key});
    } else if (child.props && child.props.children) {
      return React.cloneElement(child, {}, this.assignRefs(child.props.children));
    } else {
      return child;
    }
  },

  assignRefs (children) {
    return React.Children.map(children, this.assignRef);
  },

  handleAction () {
    let params = this.extractArgs();

    if (this.props.params) {
      params = this.props.params(params);
    }

    // console.log('params', params);
    this.props.action.apply(null, params);
  },

  activate () {
    this.setState({active: true});
  },

  deactivate () {
    this.setState({active: false});
  },

  render () {
    const actionClass = classnames('action', {'is-active': this.state.active});
    const params = React.Children.count(this.props.children) > 0 ?
      (<div className='action-params'>{ this.assignRefs(this.props.children) }</div>) :
      null;

    return (<div className={actionClass}>
      <label className='action-label'
        onClick={this.handleAction}
        onMouseEnter={this.activate}
        onMouseLeave={this.deactivate}>
        {this.props.label}
      </label>
      { params }
    </div>);
  }
});
