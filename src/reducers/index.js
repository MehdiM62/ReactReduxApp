import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
  courses, // the way that we call it within state( ES6 short hand property name)
  authors
});

export default rootReducer;
