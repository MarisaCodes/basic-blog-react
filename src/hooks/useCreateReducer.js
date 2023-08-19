import { useReducer } from "react";

export const useCreateReducer = () => {
  return useReducer(reducer, {
    disabled: true,
    loading: false,
  });
};

function reducer(state, action) {
  return {
    ...state,
    ...action.payload,
  };
}
