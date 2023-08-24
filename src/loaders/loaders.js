import { defer } from "react-router-dom";

export const homeLoader = async () => {
  const data = fetch("http://localhost:3050/api/", {
    method: "GET",
    credentials: "include",
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Response(res.status + " " + res.statusText);
      }
    })
    .catch((err) => {
      throw new Error(err?.message || err);
    });

  return defer({ data });
};

export const signupLoader = async () => {
  const data = fetch("http://localhost:3050/api/signup", {
    method: "GET",
    credentials: "include",
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else if (res.status === 302) {
        return 302;
      } else {
        throw new Error(res.status + " " + res.statusText);
      }
    })
    .catch(() => {
      throw new Error("Not found 😖");
    });

  return defer({ data });
};

export const loginLoader = async () => {
  const data = fetch("http://localhost:3050/api/login", {
    method: "GET",
    credentials: "include",
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else if (res.status === 302) return 302;
      else throw new Error(res.status + " " + res.statusText);
    })
    .catch(() => {
      throw new Error("Not found 😖");
    });
  return defer({ data });
};

export const createLoader = async () => {
  const data = fetch("http://localhost:3050/api/create", {
    method: "GET",
    credentials: "include",
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else if (res.status === 302) return 302;
      else {
        throw new Error(res.status + " " + res.statusText);
      }
    })
    .catch(() => {
      throw new Error("Not found 😖");
    });
  return defer({ data });
};

export const userLoader = async () => {
  const data = fetch("http://localhost:3050/api/user", {
    method: "GET",
    credentials: "include",
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else if (res.status === 302) return 302;
      else {
        throw new Error(res.status + " " + res.statusText);
      }
    })
    .catch((err) => {
      throw new Error(err?.message || err);
    });
  return defer({ data });
};
