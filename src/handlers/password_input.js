import PasswordValidator from "password-validator";
import validator from "validator";
const schema = new PasswordValidator();
schema
  .is()
  .min(8) // Minimum length 8
  .is()
  .max(100) // Maximum length 100
  .has()
  .lowercase() // Must have lowercase letters
  .has()
  .digits(2) // Must have at least 2 digits
  .has()
  .not()
  .spaces(); // Should not have spaces

export const password_input = (password, dispatch) => {
  const pswd_eval = schema.validate(password, { details: true });
  try {
    if (pswd_eval.length !== 0) {
      throw new Error("Error");
    } else if (!validator.isAscii(password)) {
      throw new Error("Non ASCII characters not allowed!");
    } else if (validator.isEmpty(password?.trim())) {
      throw new Error("Empty passwords are not allowed");
    } else if (
      password?.includes("<") ||
      password.includes(">") ||
      password?.includes("&") ||
      password?.includes("'") ||
      password?.includes('"') ||
      password?.includes("/")
    ) {
      throw new Error(">, <, &, ', \", and / characters are not allowed");
    } else {
      dispatch({
        type: "input",
        payload: {
          password: password,
          inputClassName: "is-success",
          iconClassName: "fa-check",
          status: [{ message: "Valid password" }],
        },
      });
    }
  } catch (e) {
    dispatch({
      type: "input",
      payload: {
        password: password,
        inputClassName: "is-danger",
        iconClassName: "fa-exclamation-triangle",
        status: pswd_eval.length ? pswd_eval : [{ message: e?.message || e }],
      },
    });
  }
};
