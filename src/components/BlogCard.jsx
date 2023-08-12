const BlogCard = ({ blog }) => {
  return (
    <div className="card">
      <header className="card-header is-flex-direction-column">
        <p className="blog-card-title is-size-6-mobile is-size-4-tablet">
          <strong>{blog.title}</strong>
        </p>
      </header>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img
                className="is-rounded pfp"
                src={`data:${blog.pfp_mime};base64,${blog.pfp}`}
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4 has-text-info">{blog.username}</p>
            <p className="subtitle is-6 mb-1">
              {new Date(blog.created_at).toLocaleString()}
            </p>
            <p className="subtitle is-7">
              <span className="tag is-small is-info mr-1">last updated</span>
              <span className="tag is-small is-black">
                {new Date(blog.updated_at).toLocaleString()}
              </span>
            </p>
          </div>
        </div>
        <div className="content blog-card-content">
          {blog.about && (
            <article className="message is-small">
              <div className="message-body">{blog.about}</div>
            </article>
          )}
          {blog.content}
        </div>
      </div>
      <footer className="card-footer">
        <button className="button card-footer-item is-info is-radiusless">
          Read more..
        </button>
      </footer>
    </div>
  );
};

export default BlogCard;
