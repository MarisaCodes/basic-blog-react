import { useContext, useEffect, useRef } from "react";
import { DataContext } from "../contexts/DataContext";
import "../css/navbar.css";
import blog_icon from "../assets/favicon.svg";
import github from "../assets/github.svg";
const Navbar = () => {
  const data = useContext(DataContext);
  const user = data.data.user;
  const menuRef = useRef(null);
  const burger_ref = useRef(null);

  const handle_menu = () => {
    if (menuRef.current?.classList.contains("hidden")) {
      menuRef.current?.classList.remove("hidden");
      menuRef.current?.classList.add("flex");
    } else {
      menuRef.current?.classList.add("hidden");
      menuRef.current?.classList.remove("flex");
    }

    // burger_ref.current.classList.contains("is-active")
    //   ? burger_ref.current.classList.remove("is-active")
    //   : burger_ref.current.classList.add("is-active");
  };
  return (
    <>
      <nav>
        {/* first nav group nav logo etc */}
        <div className="flex items-center justify-around gap-10">
          <a className="navbar-brand">
            <img src={blog_icon} alt="" className="h-8 w-auto" />
            <h1 className="navbar-h1">Basic Blog</h1>
          </a>

          {/* burger for mobile */}
          <div className="burger" ref={burger_ref} onClick={handle_menu}>
            <div className="bg-slate-300 h-0.5 w-7"></div>
            <div className="bg-slate-300 h-0.5 w-7"></div>
            <div className="bg-slate-300 h-0.5 w-7"></div>
          </div>
        </div>

        {/* second nav group */}
        {user === null && (
          // when user is NOT logged in
          <div
            className="sign-login-btn-group hidden md:flex"
            ref={(el) => (user === null ? (menuRef.current = el) : null)}
          >
            <hr className="mt-0 navbar-separator" />
            <button className="signup-login">Signup</button>
            <button className="signup-login">Login</button>
          </div>
        )}
        {user === null || (
          // when user IS LOGGED IN
          <div
            className="flex-grow"
            ref={(el) => (user === null ? null : (menuRef.current = el))}
          >
            <hr className="mt-0 navbar-separator" />
            <div className="user-in-group">
              <button className="user-in flex justify-center items-center gap-2">
                <img
                  src="https://static.zerochan.net/Hakurei.Reimu.full.3503126.jpg"
                  className="rounded-full w-9 aspect-square object-cover"
                  alt=""
                />
                <span>Profile</span>
              </button>
              <button className="user-in">Create Blogs</button>
              <button className="user-in">Your blogs</button>
              <hr className="mt-1 navbar-separator" />
              <button className="logout">Log out</button>
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
              <h1 className="navbar-h1">GitHube Repo</h1>
            </a>
          </div>
        )}
      </nav>
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
