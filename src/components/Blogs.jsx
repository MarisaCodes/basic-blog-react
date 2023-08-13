import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const data = useContext(DataContext);
  const blogs = data.data?.blogs;
  return (
    <div className="">
      <div className="">
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
