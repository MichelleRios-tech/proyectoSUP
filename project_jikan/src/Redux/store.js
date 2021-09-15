import { createStore,applyMiddleware } from 'redux';
import { animeReducer } from './reducer';
import thunk from 'redux-thunk';

export const store = createStore(animeReducer, applyMiddleware(thunk));