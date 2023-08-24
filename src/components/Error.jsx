import { useAsyncError, useRouteError } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { DataContext } from "../contexts/DataContext";
import { useContext } from "react";

const Error = () => {
  const route_err = useRouteError();
  const async_err = useAsyncError();
  const data = useContext(DataContext);
  return (
    <>
      <DataContext.Provider value={data === null ? { user: null } : data}>
        <Navbar />
      </DataContext.Provider>
      <div className="w-full h-screen bg-gray-900 text-gray-400">
        <div className="w-full justify-center flex items-center mx-auto text-4xl h-5/6">
          {route_err?.status
            ? route_err.status + " " + route_err.statusText
            : async_err?.message ||
              route_err?.message ||
              "An error has occured"}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Error;
