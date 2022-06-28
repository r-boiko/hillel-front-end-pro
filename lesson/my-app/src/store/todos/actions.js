import {ADD_TODO, REMOVE_TODO, SET_ENTER_TODO} from './types';

export const addTodo = payload => ({
  type: ADD_TODO,
  payload,
})

export const removeTodo = payload => ({
  type: REMOVE_TODO,
  payload,
})

export const setEnterTodo = payload => ({
  type: SET_ENTER_TODO,
  payload,
})
