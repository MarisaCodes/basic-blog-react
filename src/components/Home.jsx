import { useContext } from "react";
import "../css/blogs.css";
import Blogs from "./Blogs";
import Wrapper from "./Wrapper";
import { DataContext } from "../contexts/DataContext";
const Home = () => {
  return (
    <Wrapper>
      <Blogs />
    </Wrapper>
  );
};

export default Home;
