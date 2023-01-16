import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { State } from './state';
import { rootReducer } from './rootReducer';

export const store = createStore(rootReducer, applyMiddleware(thunk));