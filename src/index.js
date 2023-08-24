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
  userLoader,
} from "./loaders/loaders";
import Error from "./components/Error";
import {
  createAction,
  homeAction,
  loginAction,
  signupAction,
} from "./actions/actions";
import User from "./components/User";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: homeLoader,
    action: homeAction,
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
  {
    path: "/user",
    element: <User />,
    loader: userLoader,
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
