import {ADD_TODO, REMOVE_TODO, SET_ENTER_TODO} from './types';

const initialState = {
  enterTodo: '',
  items: [],
};

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case SET_ENTER_TODO:
      return {
        ...state,
        enterTodo: action.payload,
      }
    case ADD_TODO:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case REMOVE_TODO:
      return {
        ...state,
        items: state.items.filter(todo => action.payload !== todo.id),
      };
    default:
      return state;
  }
}
