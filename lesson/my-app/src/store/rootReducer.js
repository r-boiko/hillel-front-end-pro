import {combineReducers} from "redux";

import {counter} from './counter/reducer';
import {posts} from './posts/reducer';
import {todos} from './todos/reducer';
import {movies} from './movies/reducer';

const rootReducer = combineReducers({
  counter,
  posts,
  todos,
  movies,
});

export default rootReducer;
