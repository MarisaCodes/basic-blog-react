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
