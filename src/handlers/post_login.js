export const post_login = (username, password, status_ref, login_ref) => {
  const headers = new Headers();
  if (login_ref) {
    login_ref.current.disabled = true;
    login_ref.current.classList.add("is-loading");
  }

  if (!password.trim() || !username.trim()) {
    if (status_ref) {
      status_ref.current.classList.remove("is-hidden");
      status_ref.current.classList.remove("has-background-success");
      status_ref.current.classList.add("has-background-danger");
      status_ref.current.innerHTML = "Username or password is empty!💢";

      if (login_ref) {
        login_ref.current.disabled = false;
        login_ref.current.classList.remove("is-loading");
      }
      return;
    }
  }

  headers.set("Authorization", "Basic " + btoa(`${username}:${password}`));
  const fetch_options = {
    method: "POST",
    credentials: "include",
    headers,
  };
  fetch("http://localhost:3050/api/login", fetch_options)
    .then((res) => {
      if (res.ok) {
        if (status_ref) {
          status_ref.current.classList.remove("is-hidden");
          status_ref.current.classList.remove("has-background-danger");
          status_ref.current.classList.add("has-background-success");
          status_ref.current.innerHTML = "Success!";
          window.location.replace("/");
        }
      } else if (res.status === 400) {
        res.json().then((data) => {
          if (status_ref) {
            status_ref.current.classList.remove("is-hidden");
            status_ref.current.classList.add("has-background-danger");
            status_ref.current.innerHTML = data.error;

            if (login_ref) {
              login_ref.current.disabled = false;
              login_ref.current.classList.remove("is-loading");
            }
            return;
          }
        });
      } else {
        throw new Error(res.status + " " + res.statusText);
      }
    })
    .catch((err) => {
      if (status_ref) {
        status_ref.current.classList.remove("is-hidden");
        status_ref.current.classList.add("has-background-danger");
        status_ref.current.innerHTML = err?.message || err;

        if (login_ref) {
          login_ref.current.disabled = false;
          login_ref.current.classList.remove("is-loading");
        }
        return;
      }
    });
};
