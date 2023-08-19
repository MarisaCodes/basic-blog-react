import { md } from "../hooks/useMdguide";

const BlogCard = ({ blog }) => {
  return (
    <div className="card flex flex-col gap-3 w-full bg-gray-800 border border-gray-700 sm:rounded-lg p-2 border-r-0 border-l-0 sm:border-r sm:border-l">
      <header className="card-header flex-col w-full p-3">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 w-full justify-between pb-5">
          <span className="text-xs bg-gray-700 p-1 rounded-md w-fit">
            {new Date().toLocaleString()}
          </span>
          <div>
            <span className="text-xs pr-2 text-gray-500">Last Updated</span>
            <span className="text-xs bg-sky-800 p-1 rounded-md">
              {new Date().toLocaleString()}
            </span>
          </div>
        </div>
        <h1 className="blog-card-title text-2xl tracking-tight text-gray-900 dark:text-white w-full break-words hyphens-auto line-clamp-2">
          {blog.title}
        </h1>
      </header>
      <div>
        <div className="media flex gap-1 items-center pl-2">
          <img
            className="h-14 rounded-full aspect-square object-cover"
            // src="https://static.zerochan.net/Hakurei.Reimu.full.3503126.jpg"
            src={`data:${blog.pfp_mime};base64,${blog.pfp}`}
            alt="user profile"
          />

          <div className="flex flex-col gap-1">
            <p className="text-2xl font-semibold ">{blog.username}</p>
            <p className="text-xs p-1 rounded-md w-fit text-sky-500">
              {new Date(blog.registered_at).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="p-3">
          <div className="break-words line-clamp-5 hyphens-auto text-md text-gray-500">
            {blog.about && (
              <div className="p-2 bg-slate-700 text-gray-300 rounded-md mb-2 text-xs font-semibold w-fit">
                {blog.about}
              </div>
            )}
            <div
              className="content pt-4 px-4"
              dangerouslySetInnerHTML={{ __html: md.render(blog.content) }}
            ></div>
          </div>
        </div>
      </div>
      <footer className="flex pr-4">
        <a className="ml-auto cursor-pointer text-blue-600 font-semibold">
          Read more &#8594;
        </a>
      </footer>
    </div>
  );
};

export default BlogCard;
