import { useGetBlogs } from "../hooks/useGetBlogs";
import "../css/blogs.css";
import Blogs from "./Blogs";
import Wrapper from "./Wrapper";

const Home = () => {
  const data = useGetBlogs();
  return (
    <Wrapper data={data}>
      <Blogs />
    </Wrapper>
  );
};

export default Home;
