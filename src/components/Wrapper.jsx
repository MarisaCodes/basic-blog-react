import "bulma/css/bulma.min.css";
import "../css/blogs.css";
import Navbar from "./Navbar";
import { DataContext } from "../contexts/DataContext";

const Wrapper = ({ children, data }) => {
  return (
    <DataContext.Provider value={data}>
      <Navbar />
      {children}
    </DataContext.Provider>
  );
};

export default Wrapper;
