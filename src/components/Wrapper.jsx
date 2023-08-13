import Navbar from "./Navbar";
import { DataContext } from "../contexts/DataContext";
import Footer from "./Footer";
import Loader from "./Loader";
import Error from "./Error";
const Wrapper = ({ children, data }) => {
  if (data.error !== null) return <Error error={data.error} />;
  if (data.data === null) return <Loader />;
  return (
    <>
      <DataContext.Provider value={data}>
        <Navbar />
        {children}
      </DataContext.Provider>
      <Footer />
    </>
  );
};

export default Wrapper;
