import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import BlogCard from "./BlogCard";
const Blogs = () => {
  const {blogs} = useContext(DataContext);
  return (
    <div className="bg-gray-900 text-slate-300 w-full">
      <div className="w-full sm:w-10/12 md:w-8/12 mx-auto flex flex-col gap-5 py-5">
        {blogs.length > 0
          ? blogs.map((blog) => {
              return <BlogCard blog={blog} key={blog.blog_id} />;
            })
          : null}
      </div>
    </div>
  );
};

export default Blogs;
