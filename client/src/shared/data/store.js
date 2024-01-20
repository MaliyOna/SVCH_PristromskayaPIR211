import { createStore, combineReducers } from 'redux';
import { jsonDataReducer } from '../data/reducers';

const rootReducer = combineReducers({
  jsonData: jsonDataReducer,
});

const store = createStore(rootReducer);

export default store;