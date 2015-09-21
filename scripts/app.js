import styles from '../styles/app.scss';
import prism from './vendors/prism';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, Link } from 'react-router';
import createBrowserHistory from 'react-router/node_modules/history/lib/createBrowserHistory';
import { createStore } from 'redux';
import { bindAll } from 'redux-act';
import store from './store';

import Main from './main';
import Home from './home';
import Settings from './settings';
import { Addons, Application, Audio, Files, Gui, Input, Jsonrpc, Kodi, Player, Playlist, Pvr, System, Video } from './api';

const App = React.createClass({
  render () {
    return (<Provider store={store}>
      <Router history={createBrowserHistory()}>
        <Route path='/' component={Main}>
          <IndexRoute component={Home} />
          <Route path='addons' component={Addons} />
          <Route path='application' component={Application} />
          <Route path='audio' component={Audio} />
          <Route path='files' component={Files} />
          <Route path='gui' component={Gui} />
          <Route path='input' component={Input} />
          <Route path='jsonrpc' component={Jsonrpc} />
          <Route path='kodi' component={Kodi} />
          <Route path='player' component={Player} />
          <Route path='playlist' component={Playlist} />
          <Route path='pvr' component={Pvr} />
          <Route path='system' component={System} />
          <Route path='video' component={Video} />
          <Route path='settings' component={Settings} />
        </Route>
      </Router>
    </Provider>);
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
