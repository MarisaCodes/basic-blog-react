import { useState, useEffect } from "react";

export const useGetSignup = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3050/api/signup", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            setData(data);
          });
        } else if (res.status === 302) {
          window.location.replace("/");
        } else {
          throw new Error(res.status + " " + res.statusText);
        }
      })
      .catch((err) => setError(err?.message || err));
  }, []);
  return { data, error };
};
