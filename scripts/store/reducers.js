import * as actions from './actions';
import { combineReducers } from 'redux';
import { createReducer } from 'redux-act';

const settingsReducer = createReducer({
  [actions.setSettings]: (state, config)=> config
}, {});

const uiReducer = createReducer({
  [actions.setUI]: (state, ui)=> ui
}, {
  request: {
    body: false
  }
});

const requestReducer = createReducer({
  [actions.setRequest]: (state, request)=> request
}, false);

const responseReducer = createReducer({
  [actions.setResponse]: (state, response)=> response
}, false);

const kodiReducer = createReducer({
  [actions.setKodi]: (state, kodi)=> kodi
}, false);

const notificationsReducer = createReducer({
  [actions.addNotification]: (state, notif)=> {
    const notifs = state.slice(state.length >= 5 ? 1 : 0);
    notifs.push(notif);
    return notifs;
  },
  [actions.removeNotification]: (state, notif)=> {
    const idx = state.indexOf(notif);
    if (idx >= 0) {
      return state.slice(idx + 1);
    } else {
      return state;
    }
  }
}, []);

export default combineReducers({
  settings: settingsReducer,
  ui: uiReducer,
  request: requestReducer,
  response: responseReducer,
  kodi: kodiReducer,
  notifications: notificationsReducer
});
