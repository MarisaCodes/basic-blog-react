import { useContext, useState } from "react";
import { DataContext } from "../contexts/DataContext";
import { Form } from "react-router-dom";

const UserForms = () => {
  const { user } = useContext(DataContext);
  const [edit, setEdit] = useState(user?.about);
  const [disabled, setDisabled] = useState(null);
  return (
    <div className="bg-gray-900 text-slate-300 w-full h-fit py-7">
      <div className="flex flex-col items-center justify-center h-full gap-24">
        <div className="flex items-center justify-center">
          <h3>{user.username}</h3>
          <Form className="flex flex-col sm:flex-row justify-center items-center">
            <label htmlFor="pfp">
              <img
                src={`data:${user.pfp_mime};base64,${user.pfp}`}
                className="rounded-full h-32 aspect-square object-cover w-fit cursor-pointer"
                data-tooltip-target="tooltip-default"
                alt=""
              />
              <div
                id="tooltip-default"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                Tooltip content
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <input
                type="file"
                name="pfp"
                id="pfp"
                accept="image/*"
                className="hidden"
              />
            </label>
          </Form>
        </div>
        <Form className="flex flex-col gap-3">
          <label htmlFor="edit">Edit about</label>
          <input
            type="text"
            name="edit"
            id="edit"
            value={edit || ""}
            onChange={(e) => setEdit(e.target.value)}
            placeholder="About me..."
            className="p-2 px-3 rounded-md bg-gray-800 border-gray-700 border"
          />
          <button
            className="w-fit  flex gap-2 items-center p-2 px-4 bg-blue-700 rounded-md cursor-pointer hover:bg-blue-800 disabled:bg-blue-400 disabled:cursor-not-allowed"
            disabled={disabled}
            type="submit"
          >
            <svg
              className={`animate-spin h-5 w-fit text-white${
                disabled ? "" : " hidden"
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
            Edit
          </button>
        </Form>
      </div>
    </div>
  );
};

export default UserForms;
