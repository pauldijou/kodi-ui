import { createStore } from 'redux';
import { bindAll } from 'redux-act';
import * as actions from './actions';
import reducer from './reducers';

const store = createStore(reducer);
bindAll(actions, store);

export default store;
