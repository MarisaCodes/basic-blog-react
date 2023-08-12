import "bulma/css/bulma.min.css";
import { useState, useRef, useContext } from "react";

import { username_input } from "../handlers/username_input";
import { password_input } from "../handlers/password_input";
import { useDisabled } from "../hooks/useDisabled";
import { post_signup } from "../handlers/post_signup";
import { DataContext } from "../contexts/DataContext";
import { useUsernameReducer } from "../hooks/useUsernameReducer";
import { usePasswordReducer } from "../hooks/usePasswordReducer";

const SignupForm = () => {
  const data = useContext(DataContext);
  const users = data.data?.users;
  const [uState, uDispatch] = useUsernameReducer();
  const [pState, pDispatch] = usePasswordReducer();
  const [pfp, setPfp] = useState(null);

  const submit_ref = useRef(null);
  const error_ref = useRef(null);
  const disabled = useDisabled(submit_ref, pState.status, uState.status);

  return (
    <>
      <div className="container is-fluid mt-6">
        <h1
          ref={error_ref}
          className="has-background-danger has-text-white has-text-centered p-2 is-hidden"
        ></h1>
        <div className="field">
          <label className="label">Username</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className={"input " + (uState.inputClassName || "")}
              type="text"
              placeholder="Username"
              onInput={(e) => username_input(e.target.value, users, uDispatch)}
              value={uState.username}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
            <span className="icon is-small is-right">
              <i className={"fas " + (uState.iconClassName || "")}></i>
            </span>
          </div>
          <p className={"help " + (uState.inputClassName || "")}>
            {uState.status}
          </p>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className={"input " + (pState.inputClassName || "")}
              type="password"
              onInput={(e) => password_input(e.target.value, pDispatch)}
              placeholder="Password"
              value={pState.password}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-key"></i>
            </span>
            <span className="icon is-small is-right">
              <i className={"fas " + (pState.iconClassName || "")}></i>
            </span>
          </div>
          <div>
            {pState.status?.length
              ? pState.status.map((status) => {
                  return (
                    <p className={"help " + (pState.inputClassName || "")}>
                      {status.message}
                    </p>
                  );
                })
              : null}
          </div>
        </div>

        <div className="file has-name is-centered is-boxed">
          <label htmlFor="pfp" className="file-label">
            <input
              className="file-input"
              type="file"
              accept="image/*"
              name="pfp"
              id="pfp"
              onChange={(e) => setPfp(e.target.files[0])}
            />
            <span className="file-cta">
              <span className="file-icon">
                <i className="fas fa-upload"></i>
              </span>
              <span className="file-label">Choose an image...</span>
            </span>
            <span className="file-name">{pfp?.name || "Default profile"}</span>
          </label>
        </div>

        <div className="field is-grouped mt-5 is-grouped-centered">
          <p className="control">
            <button
              className={"button " + disabled}
              ref={submit_ref}
              disabled
              onClick={() =>
                post_signup(
                  uState.username,
                  pState.password,
                  pfp,
                  submit_ref,
                  error_ref
                )
              }
            >
              Submit
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
