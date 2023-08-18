import { useReducer } from "react";

export const useSignupReducer = () => {
  return useReducer(reducer, {
    username: "",
    password: "",
    pfp: "",
    disabled: false,
  });
};

function reducer(state, action) {
  return {
    ...state,
    ...action.payload,
  };
}
