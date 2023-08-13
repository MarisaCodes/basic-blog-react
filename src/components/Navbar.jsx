import { useContext, useRef } from "react";
import { DataContext } from "../contexts/DataContext";
import blog_icon from "../assets/favicon.svg";
const Navbar = () => {
  const data = useContext(DataContext);
  const user = data.data.user;
  const menuRef = useRef(null);
  const burger_ref = useRef(null);
  const handle_menu = () => {
    menuRef.current.classList.contains("is-active")
      ? menuRef.current.classList.remove("is-active")
      : menuRef.current.classList.add("is-active");
    burger_ref.current.classList.contains("is-active")
      ? burger_ref.current.classList.remove("is-active")
      : burger_ref.current.classList.add("is-active");
  };

  return (
    <>
      <nav
        className="navbar is-link is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a href="/" className="navbar-item">
            <img src={blog_icon} alt="basic blog icon" width="40" height="40" />
          </a>

          <a
            role="button"
            className="navbar-burger"
            ref={burger_ref}
            aria-label="menu"
            aria-expanded="false"
            onClick={handle_menu}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="menu" className="navbar-menu" ref={menuRef}>
          <div className="navbar-start">
            <a href="/" className="navbar-item has-text-centered is-size-5">
              Basic Blog
            </a>
            {user === null || (
              <a
                href=""
                className="navbar-item is-flex is-align-items-center is-justify-content-center"
              >
                <img
                  className="mr-1"
                  src={"data:" + user?.pfp_mime + ";base64," + user?.pfp}
                  height="200"
                  style={{ objectFit: "scale-down", borderRadius: "50%" }}
                  alt="user profile picture"
                />
                <span>{user?.username || ""}</span>
              </a>
            )}
          </div>

          <div className="navbar-end has-text-centered">
            {user === null ? (
              <div className="navbar-item">
                <div className="buttons">
                  <a href="/signup" className="button is-info">
                    <strong>Sign up</strong>
                  </a>
                  <a href="/login" className="button is-light">
                    Log in
                  </a>
                </div>
              </div>
            ) : (
              <>
                <a href="/create" className="navbar-item">
                  Create Blog
                </a>
                <hr className="navbar-divider" />
                <a href="" className="navbar-item">
                  Your Blogs
                </a>
              </>
            )}
          </div>
        </div>
      </nav>
      <div style={{ height: "52px" }}></div>
    </>
  );
};

export default Navbar;
