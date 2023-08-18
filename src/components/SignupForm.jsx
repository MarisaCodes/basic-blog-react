import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

const SignupForm = () => {
  const { users } = useContext(DataContext);

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
        <button className="w-fit mt-10 flex gap-2 items-center p-2 px-4 bg-blue-700 rounded-md cursor-pointer hover:bg-blue-800 disabled:bg-blue-400 disabled:cursor-not-allowed">
          <svg
            className="animate-spin hidden h-5 w-fit text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Signup
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
