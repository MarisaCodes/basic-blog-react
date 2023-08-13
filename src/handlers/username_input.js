import { validateUsername } from "@digitalcube/username-validator";
import validator from "validator";

export const username_input = (username, users, dispatch) => {
  try {
    // if (users?.includes(username)) {
    //   throw new Error("This username is already taken");
    // }
    if (!validator.isAscii(username)) {
      throw new Error("Invalid username format");
    } else if (validator.isEmpty(username?.trim())) {
      throw new Error("Empty usernames are not allowed");
    }
    validateUsername(username);
    dispatch({
      type: "input",
      payload: {
        username: username,
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
