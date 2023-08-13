import { useEffect } from "react";

export const useDisabled = (submit_ref, pState, uState) => {
  useEffect(() => {
    console.log(pState);
    if (
      pState?.status[0]?.message === "Valid password" &&
      uState?.status === "This username is valid" &&
      submit_ref?.current
    ) {
      submit_ref.current.disabled = false;
    } else {
      submit_ref.current.disabled = true;
    }
  }, [submit_ref, pState, uState]);
};
