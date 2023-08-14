import { useState, useRef, useContext } from "react";

// import { username_input } from "../handlers/username_input";
// import { password_input } from "../handlers/password_input";
import { useDisabled } from "../hooks/useDisabled";
// import { post_signup } from "../handlers/post_signup";
import { DataContext } from "../contexts/DataContext";
import { useUsernameReducer } from "../hooks/useUsernameReducer";
import { usePasswordReducer } from "../hooks/usePasswordReducer";

const SignupForm = () => {
  const data = useContext(DataContext);
  // const users = data.data?.users;
  // const [uState, uDispatch] = useUsernameReducer();
  // const [pState, pDispatch] = usePasswordReducer();
  // const [pfp, setPfp] = useState(null);

  // const submit_ref = useRef(null);
  // const error_ref = useRef(null);
  // useDisabled(submit_ref, pState, uState);

  return (
    <form className="bg-gray-900 text-slate-300 w-full">
      <div className="flex flex-col w-full md:w-9/12 mx-auto pt-10 pb-14 px-2 md:px-0">
        <label htmlFor="username" className="mb-2">
          Username
        </label>
        <input
          type="text"
          name="username"
          id="username"
          className="border-gray-600 bg-gray-700 border outline-none focus:outline-blue-700 outline-offset-0 p-1.5 rounded-md mb-10"
          required
        />
        <label htmlFor="password" className="mb-2">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="border-gray-600 bg-gray-700 border outline-none focus:outline-blue-700 outline-offset-0 p-1.5 rounded-md mb-12"
          required
        />
        <label htmlFor="pfp" className="pb-2 mx-auto sm:ml-0">
          Upload profile picture
        </label>
        <input
          className="file:p-2 file:text-gray-300 file:border-none file:hover:bg-gray-700 file:bg-gray-600 w-9/12 sm:w-fit mx-auto sm:ml-0 bg-gray-800 file:rounded-l-md rounded-md file:cursor-pointer"
          type="file"
          name="pfp"
          id="pfp"
        />
        <button className="bg-blue-700 hover:bg-blue-800 p-2 px-5 rounded-lg w-fit mt-10 mx-auto sm:ml-0 disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed">
          Submit
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
