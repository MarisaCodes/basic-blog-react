import Navbar from "./Navbar";
import { DataContext } from "../contexts/DataContext";
import Footer from "./Footer";
import { useLoaderData, Await, useNavigate } from "react-router-dom";
import { Suspense } from "react";
import Loader from "./Loader";
import Error from "./Error";

const Wrapper = ({ children }) => {
  const data = useLoaderData();
  const navigate = useNavigate();

  data.data?.then((data) => {
    if (data === 302) {
      navigate("/");
    }
  });

  return (
    <Suspense fallback={<Loader />}>
      <Await resolve={data.data} errorElement={<Error />}>
        {(data) => {
          return (
            <>
              <DataContext.Provider value={data}>
                <Navbar />
                {children}
              </DataContext.Provider>
              <Footer />
            </>
          );
        }}
      </Await>
    </Suspense>
  );
};

export default Wrapper;
