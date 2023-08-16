import { useReducer } from "react";

export const useTabsReducer = () => {
  return useReducer(reducer, {
    write: false,
    preview: false,
    mdGuide: true,
  });
};

function reducer(_, action) {
  switch (action.type) {
    case "write":
      return {
        write: true,
        preview: false,
        mdGuide: false,
      };
    case "preview":
      return {
        write: false,
        preview: true,
        mdGuide: false,
      };
    case "mdGuide":
      return {
        write: false,
        preview: false,
        mdGuide: true,
      };
    default:
      return {
        write: false,
        preview: false,
        mdGuide: true,
      };
  }
}
