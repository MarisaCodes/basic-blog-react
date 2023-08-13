import { useRef, useState } from "react";
import { post_login } from "../handlers/post_login";

const LoginForm = () => {
  const [username, setUname] = useState("");
  const [password, setPswd] = useState("");
  const status_ref = useRef("");
  const login_ref = useRef("");
  return (
    <div className="container is-fluid mt-6">
      <h1
        ref={status_ref}
        className="has-text-white has-text-centered p-2 is-hidden"
      ></h1>
      <div className="field">
        <label className="label">Username</label>
        <div className="control has-icons-left has-icons-right">
          <input
            className="input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUname(e.target.value)}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas "></i>
          </span>
        </div>
        <p className="help">{}</p>
      </div>

      <div className="field">
        <label className="label">Password</label>
        <div className="control has-icons-left has-icons-right">
          <input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPswd(e.target.value)}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-key"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas "></i>
          </span>
        </div>
        <p className={"help "}>{}</p>
      </div>

      <div className="field is-grouped mt-5 is-grouped-centered">
        <div className="control" style={{ width: "100%" }}>
          <button
            ref={login_ref}
            className={"button is-link is-fullwidth"}
            onClick={() =>
              post_login(username, password, status_ref, login_ref)
            }
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
