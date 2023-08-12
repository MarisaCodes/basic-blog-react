import PasswordValidator from "password-validator";
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
  if (pswd_eval.length === 0) {
    dispatch({
      type: "input",
      payload: {
        password: password,
        inputClassName: "is-success",
        iconClassName: "fa-check",
        status: [{ message: "Valid password" }],
      },
    });
  } else {
    dispatch({
      type: "input",
      payload: {
        password: password,
        inputClassName: "is-danger",
        iconClassName: "fa-exclamation-triangle",
        status: pswd_eval,
      },
    });
  }
};
