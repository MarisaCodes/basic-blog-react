import { useGetBlogs } from "../hooks/useGetBlogs";
import Blogs from "./Blogs";
import Loader from "./Loader";
import Wrapper from "./Wrapper";
import Error from "./Error";

const Home = () => {
  const data = useGetBlogs();
  return (
    <Wrapper data={data}>
      <Blogs />
    </Wrapper>
  );
};

export default Home;
