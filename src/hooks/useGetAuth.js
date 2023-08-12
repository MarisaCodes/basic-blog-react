import { useState, useEffect } from "react";

export function useGetAuth() {
  const [auth, setAuth] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    fetch("http://localhost:3050/api/auth", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => {
        if (res.ok) {
          res
            .json()
            .then((data) => {
              setAuth(data);
            })
            .catch((err) => {
              setError(err?.message || err);
            });
        } else throw new Error(res.status + " " + res.statusText);
      })
      .catch((err) => setError(err?.message || err));
  }, []);
  return { auth, error };
}
