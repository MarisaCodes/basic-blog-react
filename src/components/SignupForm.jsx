import { useEffect, useRef } from "react";
import { useSignupReducer } from "../hooks/useSignupReducer";
import { Form, useActionData, useSubmit } from "react-router-dom";

const SignupForm = () => {
  const [state, dispatch] = useSignupReducer();

  const svg_loader = useRef(null);
  const error = useActionData();
  const submit = useSubmit();
  useEffect(() => {
    if (error?.message) {
      dispatch({ payload: { disabled: false } });
      svg_loader.current?.classList.toggle("hidden");
    }
  }, [error]);

  return (
    <Form className="bg-gray-900 text-slate-300 w-full">
      {!error?.message.includes("username") && (
        <div className="text-red-400 w-full text-center pt-7">
          {error?.message}
        </div>
      )}
      <div className="flex flex-col w-full md:w-9/12 mx-auto pt-10 pb-14 px-2 md:px-0">
        <label htmlFor="username" className="mb-2">
          Username
        </label>
        {error?.message.includes("username") && (
          <div className="text-red-400 mb-2">{error.message}</div>
        )}
        <input
          type="text"
          name="username"
          id="username"
          className="border-gray-600 bg-gray-700 border outline-none focus:outline-blue-700 outline-offset-0 p-1.5 rounded-md mb-10"
          value={state.username}
          onInput={(e) =>
            dispatch({ payload: { username: e.target.value.trim() } })
          }
          required
        />
        <label htmlFor="password" className="mb-2">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={state.password}
          onInput={(e) =>
            dispatch({ payload: { password: e.target.value.trim() } })
          }
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
          accept="image/*"
          onChange={(e) => dispatch({ payload: { pfp: e.target.files[0] } })}
        />
        <button
          className="w-fit mt-10 flex gap-2 items-center p-2 px-4 bg-blue-700 rounded-md cursor-pointer hover:bg-blue-800 disabled:bg-blue-400 disabled:cursor-not-allowed"
          type="submit"
          disabled={state.disabled}
          onClick={(e) => {
            if (state.username && state.password) {
              dispatch({ payload: { disabled: true } });
              svg_loader.current?.classList.toggle("hidden");
              const formData = new FormData();
              formData.set("username", state.username);
              formData.set("password", state.password);
              if (state.pfp) {
                console.log("setting pfp", state.pfp);
                formData.set("pfp", state.pfp);
              }
              submit(formData, {
                method: "post",
                action: "/signup",
                encType: "multipart/form-data",
              });
            }
          }}
        >
          <svg
            className="animate-spin hidden h-5 w-fit text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            ref={svg_loader}
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
    </Form>
  );
};

export default SignupForm;
