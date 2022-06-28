import {SET_POSTS, REMOVE_POST} from './types';

export const setPosts = posts => ({
  type: SET_POSTS,
  posts
});

export const removePost = postId => ({
  type: REMOVE_POST,
  postId,
})

