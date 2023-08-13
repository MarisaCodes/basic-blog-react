export const post_signup = (username, password, pfp, submit_ref, error_ref) => {
  submit_ref.current.classList.add("is-loading");
  submit_ref.current.disabled = true;
  error_ref.current.classList.add("is-hidden");
  let fetch_options = {
    method: "POST",
    credentials: "include",
  };
  if (pfp) {
    let formdata = new FormData();
    formdata.append("pfp", pfp);
    Object.assign(fetch_options, { body: formdata });
    if (!pfp?.type.includes("image")) {
      error_ref.current.innerHTML = "Invalid image type";
      submit_ref.current.classList.remove("is-loading");
      error_ref.current.classList.remove("is-hidden");
      submit_ref.current.disabled = false;
      return;
    }
  }
  let headers = new Headers();
  headers.set("Authorization", "Basic " + btoa(`${username}:${password}`));
  Object.assign(fetch_options, { headers });
  fetch("http://localhost:3050/api/signup", fetch_options)
    .then((res) => {
      if (res.ok) {
        window.location.replace("/");
      } else {
        res
          .json()
          .then((data) => {
            console.log(data.error);
            if (data?.error) {
              throw new Error(data.error);
            } else {
              throw new Error(res.status + " " + res.statusText);
            }
          })
          .catch((err) => {
            console.log(err || err.message);
            submit_ref.current.classList.remove("is-loading");
            submit_ref.current.removeAttribute("disabled");
            error_ref.current.innerHTML = err || err.message;
            error_ref.current.classList.remove("is-hidden");
          });
      }
    })
    .catch((err) => {
      console.log(err || err.message);
      submit_ref.current.classList.remove("is-loading");
      submit_ref.current.removeAttribute("disabled");
      error_ref.current.innerHTML = err || err.message;
      error_ref.current.classList.remove("is-hidden");
    });
};
