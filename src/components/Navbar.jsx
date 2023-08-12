import { useContext, useRef } from "react";
import { DataContext } from "../contexts/DataContext";
import blog_icon from "../assets/favicon.svg";
const Navbar = () => {
  const data = useContext(DataContext);
  const user = data.data.user;
  const menuRef = useRef(null);
  const handle_menu = () => {
    menuRef.current.classList.contains("is-active")
      ? menuRef.current.classList.remove("is-active")
      : menuRef.current.classList.add("is-active");
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
            <a href="/" className="navbar-item">
              Basic Blogs
            </a>

            {user && (
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                  <div className="is-flex is-align-items-center">
                    <img
                      src={"data:" + user?.pfp_mime + ";base64," + user?.pfp}
                      width="45"
                      height="45"
                      style={{ objectFit: "scale-down" }}
                      alt=""
                    />

                    <span>{user?.username || ""}</span>
                  </div>
                </a>

                <div className="navbar-dropdown">
                  <a href="" className="navbar-item">
                    Profile
                  </a>
                  <a href="" className="navbar-item">
                    Create Blog
                  </a>
                  <hr className="navbar-divider" />
                  <a href="" className="navbar-item">
                    Your Blogs
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              {user === null && (
                <div className="buttons">
                  <a href="/signup" className="button is-info">
                    <strong>Sign up</strong>
                  </a>
                  <a href="/login" className="button is-light">
                    Log in
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      <div style={{ height: "52px" }}></div>
    </>
  );
};

export default Navbar;
