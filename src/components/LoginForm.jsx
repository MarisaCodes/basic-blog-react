const LoginForm = ({ user }) => {
  return (
    <div className="container is-fluid mt-6">
      <div className="field">
        <label className="label">Username</label>
        <div className="control has-icons-left has-icons-right">
          <input className={"input "} type="text" placeholder="Username" />
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas "></i>
          </span>
        </div>
        <p className={"help "}>{}</p>
      </div>


      <div className="field">
        <label className="label">Password</label>
        <div className="control has-icons-left has-icons-right">
          <input className={"input "} type="password" placeholder="Password" />
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
        <p className="control">
          <button
            className={"button "}
            disabled
          >
            Submit
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
