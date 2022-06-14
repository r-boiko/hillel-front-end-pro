import {combineReducers} from "redux";

import {counter} from './counter/reducer';
import {posts} from './posts/reducer';

const rootReducer = combineReducers({
  counter,
  posts,
});

export default rootReducer;
