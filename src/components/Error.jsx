import { useAsyncError, useRouteError } from "react-router-dom";
import Footer from "./Footer";

const Error = () => {
  const route_err = useRouteError();
  const async_err = useAsyncError();
  console.log(route_err, async_err);
  return (
    <>
      <div className="w-full h-screen bg-gray-900 text-gray-400">
        <div className="w-full justify-center flex items-center mx-auto text-4xl h-5/6">
          {route_err ? route_err || route_err?.data : async_err.message}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Error;
