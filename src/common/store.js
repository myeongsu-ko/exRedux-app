import { createStore, combineReducers } from 'redux';
import timelineReducer from '../timeline/state';
import friendReducer from '../friend/state';
import {composeWithDevTools} from 'redux-devtools-extension';

//combineReducers 여러개의 reducer를 합치는 역할
const reducer = combineReducers({
  timeline: timelineReducer,
  friend: friendReducer,
});
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
export default store;
