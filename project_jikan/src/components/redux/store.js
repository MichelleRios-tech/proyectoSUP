import { createStore, applyMiddleware } from 'redux';
import { animeReducer } from './reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(animeReducer, composeWithDevTools(applyMiddleware(thunk)));