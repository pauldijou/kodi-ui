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

export default combineReducers({
  settings: settingsReducer,
  ui: uiReducer,
  request: requestReducer,
  response: responseReducer,
  kodi: kodiReducer
});
