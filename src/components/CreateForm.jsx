import md_icon from "../assets/md_icon.svg";
import md_guide from "../assets/md_guide.json";
import MarkdownIt from "markdown-it";
import hljs from "highlight.js";

const CreateForm = () => {
  const md = MarkdownIt({
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return '<pre class="hljs"><code>' +
                 hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
                 '</code></pre>';
        } catch (__) {}
      }
  
      return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
    }
  });
  const guide = md.render(md_guide.guide);
  const title = md.render(md_guide.title)
  return (
    <div className="">
      <div className="">
        <label className="text-red-600">Title</label>
        <div className="">
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

        <div className="preview">
          <div className="title p-3" dangerouslySetInnerHTML={{__html:title}}></div>
          <hr />
          <div
            style={{
              wordWrap: "break-word",
              hyphens: "auto",
              padding: "30px",
            }}
          >
            <div dangerouslySetInnerHTML={{ __html: guide }}></div>
          </div>
        </div>

        <div className="guide"></div>
      </div>
    </div>
  );
};

export default CreateForm;
