import { useContext, useRef } from "react";
import { DataContext } from "../contexts/DataContext";
import "../css/navbar.css";
import blog_icon from "../assets/favicon.svg";
import github from "../assets/github.svg";
import { Form, Link } from "react-router-dom";
const Navbar = () => {
  const { user } = useContext(DataContext);
  const menuRef = useRef(null);
  const burger_ref = useRef(null);
  const navRef = useRef(null);

  const handle_menu = () => {
    menuRef.current?.classList.toggle("hidden");
  };
  document.addEventListener("click", (e) => {
    if (
      !navRef.current?.contains(e.target) &&
      !menuRef.current?.classList.contains("hidden")
    )
      handle_menu();
  });
  return (
    <>
      <nav ref={navRef}>
        {/* first nav group nav logo etc */}
        <div className="flex items-center justify-around gap-10">
          <Link to="/" className="navbar-brand">
            <img src={blog_icon} alt="" className="h-8 w-auto" />
            <h1 className="navbar-h1">Basic Blog</h1>
          </Link>

          {/* burger for mobile */}
          <div className="burger" ref={burger_ref} onClick={handle_menu}>
            <div className="bg-slate-400 h-0.5 w-7 rounded-lg"></div>
            <div className="bg-slate-400 h-0.5 w-7 rounded-lg"></div>
            <div className="bg-slate-400 h-0.5 w-7 rounded-lg"></div>
          </div>
        </div>

        {/* second nav group */}
        {user === null && (
          // when user is NOT logged in
          <div
            className="hidden md:flex"
            ref={(el) => (user === null ? (menuRef.current = el) : null)}
          >
            <div className="sign-login-btn-group">
              <hr className="mt-0 navbar-separator" />
              <Link to="/signup" className="signup-login">
                Signup
              </Link>
              <Link to="/login" className="signup-login">
                Login
              </Link>
              <hr className="mt-1 navbar-separator" />
            </div>
          </div>
        )}
        {user === null || (
          // when user IS LOGGED IN
          <div
            className="flex-grow hidden md:block"
            ref={(el) => (user === null ? null : (menuRef.current = el))}
          >
            <hr className="mt-0 navbar-separator" />
            <div className="user-in-group">
              <Link className="user-in flex justify-center items-center gap-2"
              to="/user"
              >
                <img
                  src={`data:${user?.pfp_mime};base64,${user?.pfp}`}
                  className="rounded-full h-10 aspect-square object-cover"
                  alt=""
                />
                <span>{user?.username}</span>
              </Link>
              <Link
                to="/create"
                className="user-in flex justify-center items-center"
              >
                Create Blogs
              </Link>
              <a className="user-in flex justify-center items-center">
                Your blogs
              </a>
              <hr className="mt-1 navbar-separator" />
              <Form action="/" className="w-9/12 sm:w-6/12 md:w-fit" method="post">
                <button className="logout w-full" name="intent" value="logout">Log out</button>
              </Form>
              <hr className="mt-1 navbar-separator" />
            </div>
          </div>
        )}
        {/* third group for github icon */}
        {/* trick: flex-grow so it can take width remaining */}
        {/* trick: display grid then justify-self-end on child so it can go to far right side */}
        {/* <-----parent grid div with flex-grow----------->[element goes end] */}
        {/* alternative: just use flex-grow */}
        {/* then on child element do w-fit (width fit) and ml-auto */}
        {user === null && (
          <div className="flex-grow">
            <a
              href="https://github.com/MarisaCodes/basic-blog-react"
              className="github-repo-link"
            >
              <img src={github} alt="" className="h-8 w-auto" />
              <h1 className="navbar-h1">GitHub Repo</h1>
            </a>
          </div>
        )}
      </nav>
      <div className="bg-slate-800" style={{ height: "64px" }}></div>
      <hr className="h-px bg-gray-200 border-0 dark:bg-slate-700 w-full block fixed" />
    </>
  );
};

export default Navbar;
