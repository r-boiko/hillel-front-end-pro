import {INCREMENT, DECREMENT} from './types';

const initialState = {
  number: 0,
}

export const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      console.log('reducer INCREMENT: ', action)
      return {
        ...state,
        number: state.number + 1,
      }
    case DECREMENT:
      console.log('reducer DECREMENT: ', action)
      return {
        ...state,
        number: state.number - 1,
      }
    default:
      return state;
  }
}
