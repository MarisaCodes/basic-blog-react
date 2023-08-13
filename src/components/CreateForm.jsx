import md_icon from "../assets/md_icon.svg";
const CreateForm = () => {
  return (
    <div className="container is-fluid mt-6">
      <div className="field">
        <label className="label">Title</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input" type="text" placeholder="Text input" />
          <span className="icon is-small is-left">
            <i className="fas fa-feather"></i>
          </span>
        </div>
      </div>
      <div
        className="p-1"
        style={{ border: "1px solid lightgrey", borderBottom: "0px" }}
      >
        <button className="button m-1 is-info">Write</button>
        <button className="button m-1 is-info">Preview</button>
        <button className="button m-1 is-black">Markdown Guide</button>
      </div>
      <div style={{ border: "1px solid lightgrey", padding: "10px" }}>
        <div className="field is-hidden">
          <label
            className="label is-flex is-align-items-center"
            style={{ gap: "10px" }}
          >
            <span>Blog</span>
            <img src={md_icon} alt="markdown icon" height="28" width="28" />
            <span className="tag is-light is-small">markdown support</span>
          </label>
          <div className="control">
            <textarea className="textarea" placeholder="Textarea"></textarea>
          </div>
        </div>

        <div className="preview is-hidden">
          <h1 className="title p-1"></h1>
          <hr />
          <div
            className="preview"
            style={{
              wordWrap: "break-word",
              hyphens: "auto",
              padding: "10px",
            }}
          ></div>
        </div>

        <div className="guide"></div>
      </div>
    </div>
  );
};

export default CreateForm;
