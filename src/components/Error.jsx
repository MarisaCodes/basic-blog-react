const Error = ({ error }) => {
  return (
    <div className="container is-fluid mt-6">
      <div className="has-background-danger notification is-flex is-align-items-center has-text-light is-justify-content-center p-6">
        <h1 className="is-size-4">{error}</h1>
      </div>
    </div>
  );
};

export default Error;
