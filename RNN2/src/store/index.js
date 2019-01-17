import { createStore, combineReducers } from 'redux';
import rootReducer from '../reducers';

export default (store = createStore(rootReducer));
// const rootReducer = combineReducers({
//   text: todos,
//   places: placeReducer,
// });

// const configureStore = () => {
//   return createStore(rootReducer);
// };

// export default configureStore;
