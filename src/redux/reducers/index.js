import { combineReducers } from 'redux';
import navbarReducer from './navbar';
import projectReducer from './project';

const rootReducer = combineReducers({
  nav: navbarReducer,
  project: projectReducer
});

export default rootReducer;
