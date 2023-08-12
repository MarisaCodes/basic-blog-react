const Loader = () => {
  return (
    <div className="container is-fluid mt-6">
      <div className="has-background-link notification is-flex is-align-items-center has-text-light is-justify-content-center p-6">
        <h1 className="is-size-4">Loading...</h1>
        <button className="button is-loading is-large is-link"></button>
      </div>
    </div>
  );
};

export default Loader;
