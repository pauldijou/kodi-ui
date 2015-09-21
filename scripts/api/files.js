import React from 'react';
import { connect } from 'react-redux';
import { Action } from '../components';

export default connect((state)=> ({kodi: state.kodi}))(React.createClass({
  paramsGetDirectory (params) {
    if (params[1] === '') {
      params[1] = this.props.kodi.types.files.media[0];
    }

    return params;
  },

  paramsGetFileDetails (params) {
    if (params[1] === '') {
      params[1] = this.props.kodi.types.files.media[0];
    }

    return params;
  },

  paramsGetSources (params) {
    if (params[0] === '') {
      params[0] = this.props.kodi.types.files.media[0];
    }

    return params;
  },

  render () {
    const files = this.props.kodi.files;

    return (<div>
      <h2>Files</h2>
      <Action label='Get Directory' action={files.getDirectory} params={this.paramsGetDirectory}>
        <div><input type='text' key='arg0' placeholder='Path'/></div>
        <div>
          <select key='arg1'>
            <option value=''>Media</option>
            {
              this.props.kodi.types.files.media.map(m=> <option key={m} value={m}>{m}</option>)
            }
          </select>
        </div>
        <div>
          <select key='arg2' multiple={true} defaultValue={this.props.kodi.types.list.fields.files}>
            <option disabled>Fields</option>
            {
              this.props.kodi.types.list.fields.files.map(f=> <option key={f} value={f}>{f}</option>)
            }
          </select>
        </div>
      </Action>
      <Action label='Get File Details' action={files.getFileDetails} params={this.paramsGetFileDetails}>
        <div><input type='text' key='arg0' placeholder='Path'/></div>
        <div>
          <select key='arg1'>
            <option value=''>Media</option>
            {
              this.props.kodi.types.files.media.map(m=> <option key={m} value={m}>{m}</option>)
            }
          </select>
        </div>
        <div>
          <select key='arg2' multiple={true} defaultValue={this.props.kodi.types.list.fields.files}>
            <option disabled>Fields</option>
            {
              this.props.kodi.types.list.fields.files.map(f=> <option key={f} value={f}>{f}</option>)
            }
          </select>
        </div>
      </Action>
      <Action label='Get Sources' action={files.getSources} params={this.paramsGetSources}>
        <div>
          <select key='arg0'>
            <option value=''>Media</option>
            {
              this.props.kodi.types.files.media.map(m=> <option key={m} value={m}>{m}</option>)
            }
          </select>
        </div>
      </Action>
      <Action label='Prepare Download' action={files.prepareDownload}>
        <div><input type='text' key='arg0' placeholder='Path'/></div>
      </Action>
    </div>);
  }
}));
