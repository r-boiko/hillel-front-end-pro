import {SET_POSTS, REMOVE_POST} from './types';

const initialState = [];

export const posts = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return [...new Set(action.posts)];
    case REMOVE_POST:
      console.log(action, state, 'reducer')
      return state.filter(post => post.id !== action.postId);
    default:
      return state;
  }
}
