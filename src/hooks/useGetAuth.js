import { useState, useEffect } from "react";

export function useGetAuth() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
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
              setData(data);
            })
            .catch((err) => {
              setError(err?.message || err);
            });
        } else throw new Error(res.status + " " + res.statusText);
      })
      .catch((err) => setError(err?.message || err));
  }, []);
  return { data, error };
}
