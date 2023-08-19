import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Create from "./components/Create";
import "./css/index.css";
import {
  createLoader,
  homeLoader,
  loginLoader,
  signupLoader,
} from "./loaders/loaders";
import Error from "./components/Error";
import { createAction, loginAction, signupAction } from "./actions/actions";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: homeLoader,
    errorElement: <Error />,
  },
  {
    path: "/signup/",
    element: <Signup />,
    loader: signupLoader,
    action: signupAction,
    errorElement: <Error />,
  },
  {
    path: "/login/",
    element: <Login />,
    loader: loginLoader,
    action: loginAction,
    errorElement: <Error />,
  },
  {
    path: "/create/",
    element: <Create />,
    loader: createLoader,
    action: createAction,
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
