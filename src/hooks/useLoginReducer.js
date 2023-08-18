import { useReducer } from "react";

export const useLoginReducer = () => {
  return useReducer(reducer, {
    username: "",
    password: "",
    disabled: false,
  });
};

function reducer(state, action) {
  return { ...state, ...action.payload };
}
