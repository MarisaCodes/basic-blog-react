import { useEffect, useState } from "react";
import { md } from "./useMdguide";

export const usePreview = (blog) => {
  const [preview, setPreview] = useState();
  useEffect(() => {
    blog
      ? setPreview(md.render(blog))
      : setPreview(`<span class="text-5xl">...</span>`);
  }, [blog]);
  return preview;
};
