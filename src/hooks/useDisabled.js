import { useState, useEffect } from "react";

export const useDisabled = (submit_ref, pError, uStatus) => {
  const [disabled, setDisabled] = useState(["", "true"]);

  useEffect(() => {
    if (pError !== null) {
      if (
        pError[0]?.message === "Valid password" &&
        uStatus === "This username is valid"
      ) {
        setDisabled("is-link");
        if (submit_ref.current !== null)
          submit_ref.current.removeAttribute("disabled");
      }
    } else {
      setDisabled("");
      if (submit_ref.current !== null)
        submit_ref.current.setAttribute("disabled", "true");
    }
  }, [pError, uStatus]);
  return disabled;
};
