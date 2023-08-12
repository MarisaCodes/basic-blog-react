import { useReducer } from "react";

export const usePasswordReducer = () => {
  return useReducer(reducer, {
    password: "",
    inputClassName: null,
    iconClassName: null,
    status: null,
  });
};

function reducer(_, action) {
  if (action.type === "input")
    return {
      password: action.payload.password,
      inputClassName: action.payload.inputClassName,
      iconClassName: action.payload.iconClassName,
      status: action.payload.status,
    };
}
