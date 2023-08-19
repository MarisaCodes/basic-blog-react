import { redirect } from "react-router-dom";

export const loginAction = async ({ request }) => {
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");
  const headers = new Headers();
  headers.set("Authorization", "Basic " + btoa(`${username}:${password}`));
  return await fetch("http://localhost:3050/api/login/", {
    method: "post",
    headers,
    credentials: "include",
  })
    .then(async (res) => {
      if (res.ok) return redirect("/");
      else if (res.status === 400) {
        const err = await res.json();
        return new Error(err.error);
      } else throw new Error(res.status + " " + res.statusText);
    })
    .catch((err) => {
      return new Error(err?.message || err);
    });
};

export const signupAction = async ({ request }) => {
  const formData = await request.formData();
  const pfp = formData.get("pfp");
  if (pfp && !pfp?.type.includes("image")) {
    return new Error("Your profile picture must be an image!");
  }
  const username = formData.get("username");
  formData.delete("username");
  const password = formData.get("password");
  formData.delete("password");

  const headers = new Headers();
  headers.set("Authorization", "Basic " + btoa(`${username}:${password}`));
  const fetch_options = {
    method: "post",
    headers,
    body: formData,
    credentials: "include",
  };

  return await fetch("http://localhost:3050/api/signup", fetch_options)
    .then(async (res) => {
      if (res.ok) {
        return redirect("/");
      } else if (res.status === 400) {
        const err = await res.json();
        return new Error(err.error);
      } else throw new Error(res.status + " " + res.statusText);
    })
    .catch((err) => {
      return new Error(err?.message || err);
    });
};

export const createAction = async ({ request }) => {
  let body = await request.json();
  body = JSON.stringify(body);
  return await fetch("http://localhost:3050/api/create", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body,
    credentials: "include",
  })
    .then((res) => {
      if (res.ok) {
        return redirect("/");
      } else {
        return new Error(res.status + " " + res.statusText);
      }
    })
    .catch((err) => {
      return new Error(err?.message || err);
    });
};
