import { ADD_TO_CART } from "./constants";

const initializeState = [];

export const reducer = (state = initializeState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.data];

    default:
      return state;
  }
};
