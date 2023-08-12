import { validateUsername } from "@digitalcube/username-validator";
export const username_input = (username, users, dispatch) => {
  try {
    if (users?.includes(username)) {
      throw new Error("This username is already taken");
    }
    validateUsername(username);
    dispatch({
      type: "input",
      payload: {
        username,
        inputClassName: "is-success",
        iconClassName: "fa-check",
        status: "This username is valid",
      },
    });
  } catch (e) {
    dispatch({
      type: "input",
      payload: {
        username,
        inputClassName: "is-danger",
        iconClassName: "fa-exclamation-triangle",
        status: e.message || e,
      },
    });
  }
};
