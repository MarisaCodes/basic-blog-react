import md_icon from "../assets/md_icon.svg";
import { useTabsReducer } from "../hooks/useTabsReducer";
import { useEffect, useState } from "react";
import { useMdguide } from "../hooks/useMdguide";
import { usePreview } from "../hooks/usePreview";
import { Form, useActionData, useSubmit } from "react-router-dom";
import { useCreateReducer } from "../hooks/useCreateReducer";

const CreateForm = () => {
  const [tabsState, tabsDispatch] = useTabsReducer();
  const [title, setTitle] = useState("");
  const [blog, setBlog] = useState("");
  const [btnState, btnDispatch] = useCreateReducer();
  const error = useActionData();
  useEffect(() => {
    if (error?.message || error)
      btnDispatch({ payload: { disabled: false, loading: false } });
    if (!blog?.trim() || !title?.trim())
      btnDispatch({ payload: { disabled: true, loading: false } });
    else btnDispatch({ payload: { disabled: false, loading: false } });
  }, [blog, title, error]);
  const submit = useSubmit();
  const preview = usePreview(blog);
  const { guide, guideTitle } = useMdguide();

  return (
    <Form className="bg-gray-900 text-slate-300 w-full">
      {(error?.message || error) && (
        <div className="text-red-400 w-full text-center pt-7">
          {error?.message}
        </div>
      )}
      <div className="flex flex-col w-full sm:w-11/12 md:w-9/12 mx-auto pt-10 pb-14">
        <label htmlFor="title" className="px-2 my-3">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onInput={(e) => {
            setTitle(e.target.value);
          }}
          className="mx-2 border-gray-600 bg-gray-700 border outline-none focus:outline-blue-700 outline-offset-0 p-2.5 rounded-md mb-10 mt-1"
          placeholder="Hello World!"
        />
        <div className=" mb-5">
          <div className="flex py-4 px-2 gap-7 flex-grow mx-auto md:mx-0 md:mr-auto w-full overflow-x-auto">
            <button
              className={
                "border-b-2 p-4" +
                (tabsState.write
                  ? " text-blue-700 border-blue-700"
                  : " border-gray-500")
              }
              onClick={(e) => {
                e.preventDefault();
                tabsDispatch({ type: "write" });
              }}
            >
              Write
            </button>
            <button
              className={
                "border-b-2 p-4" +
                (tabsState.preview
                  ? " text-blue-700 border-blue-700"
                  : " border-gray-500")
              }
              onClick={(e) => {
                e.preventDefault();
                tabsDispatch({ type: "preview" });
              }}
            >
              Preview
            </button>
            <button
              className={
                "border-b-2 p-4 w-fit whitespace-nowrap" +
                (tabsState.mdGuide
                  ? " text-blue-700 border-blue-700"
                  : " border-gray-500")
              }
              onClick={(e) => {
                e.preventDefault();
                tabsDispatch({ type: "mdGuide" });
              }}
            >
              Markdown Guide
            </button>
          </div>
          <hr className="h-px bg-gray-600 block w-full" />
        </div>
        {tabsState.write && (
          <div className="write px-2">
            <div>
              <span className="pr-2 font-bold">Blog</span>
              <img
                className="object-scale-down h-9 inline"
                src={md_icon}
                alt="markdown icon"
              />
              <span className="pl-2 text-gray-600">(*markdown support)</span>
            </div>
            <textarea
              className="w-full bg-gray-700 border border-gray-600 rounded-md focus:outline-blue-700 outline-none outline-offset-0 p-3"
              rows="5"
              name="content"
              id="content"
              placeholder="Blog post goes here..."
              onInput={(e) => setBlog(e.target.value)}
              value={blog}
            />
          </div>
        )}
        {tabsState.preview && (
          <div className="preview p-4 bg-gray-800 sm:rounded-md sm:border sm:border-gray-700">
            <h1 className="text-slate-300 break-words hyphens-auto">
              {title || "..."}
            </h1>
            <hr className="h-px w-full bg-gray-600 block mt-9" />
            <div
              className="break-words hyphens-auto leading-7 text-gray-400 mt-10"
              dangerouslySetInnerHTML={{ __html: preview }}
            ></div>
          </div>
        )}
        {tabsState.mdGuide && (
          <div className="md-guide p-4 bg-gray-800 sm:rounded-md sm:border sm:border-gray-700">
            <div dangerouslySetInnerHTML={{ __html: guideTitle }}></div>
            <hr className="h-px bg-gray-500 my-10 md:block" />
            <div
              className="break-words hyphens-auto flex flex-col gap-5"
              dangerouslySetInnerHTML={{ __html: guide }}
            ></div>
          </div>
        )}
        <button
          className="w-fit  flex gap-2 items-center mt-7 p-2 px-4 bg-blue-700 rounded-md cursor-pointer hover:bg-blue-800 disabled:bg-blue-400 disabled:cursor-not-allowed"
          disabled={btnState.disabled}
          type="submit"
          onClick={() => {
            btnDispatch({ payload: { disabled: true, loading: true } });
            const data = { title, content: blog };
            submit(data, {
              method: "post",
              action: "/create",
              encType: "application/json",
            });
          }}
        >
          <svg
            className={`animate-spin h-5 w-fit text-white${
              btnState.loading ? "" : " hidden"
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
          Submit
        </button>
      </div>
    </Form>
  );
};

export default CreateForm;
