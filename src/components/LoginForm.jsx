import { Form, useActionData } from "react-router-dom";
import { useLoginReducer } from "../hooks/useLoginReducer";

const LoginForm = () => {
  const [loginState, loginDispatch] = useLoginReducer();
  const error = useActionData();
  return (
    <div className="bg-gray-900 text-slate-300 w-full">
      <Form
        action="/login"
        method="post"
        className="flex flex-col gap-7 w-11/12 sm:w-10/12 md:w-9/12 mx-auto pt-10 pb-5"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="block">
            Username
          </label>
          {error?.message.includes("username") && (
            <div className="text-red-400">{error.message}</div>
          )}
          <input
            type="text"
            name="username"
            placeholder="Username here..."
            id="username"
            value={loginState.username}
            onInput={(e) =>
              loginDispatch({
                payload: { username: e.target.value.trim() },
              })
            }
            className="p-1 py-2 bg-gray-700 border border-gray-600 rounded-md outline-none outline-offset-0 focus:outline-blue-700"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="block">
            Password
          </label>
          {error?.message.includes("password") && (
            <div className="text-red-400">{error.message}</div>
          )}
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password here..."
            onInput={(e) =>
              loginDispatch({
                payload: { password: e.target.value.trim() },
              })
            }
            value={loginState.password}
            className="p-1 py-2 bg-gray-700 border border-gray-600 rounded-md outline-none outline-offset-0 focus:outline-blue-700"
          />
        </div>
        <button
          className="w-fit  flex gap-2 items-center p-2 px-4 bg-blue-700 rounded-md cursor-pointer hover:bg-blue-800 disabled:bg-blue-400 disabled:cursor-not-allowed"
          disabled={loginState.disabled}
          type="submit"
        >
          <svg
            className={`animate-spin h-5 w-fit text-white${
              loginState.disabled ? "" : " hidden"
            }`}
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
          Login
        </button>
      </Form>
    </div>
  );
};

export default LoginForm;
