import { useReducer } from "react";

export const useUsernameReducer = () => {
  return useReducer(reducer, {
    username: "",
    inputClassName: null,
    iconClassName: null,
    status: null,
  });
};

function reducer(_, action) {
  if (action.type === "input")
    return {
      username: action.payload.username || null,
      inputClassName: action.payload.inputClassName || null,
      iconClassName: action.payload.iconClassName || null,
      status: action.payload.status || null,
    };
}
