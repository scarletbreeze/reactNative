import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import placeReducer from './placeReducer';

export default combineReducers({
  todos,
  visibilityFilter,
  places: placeReducer,
});
