import { useContext, useRef } from "react";
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
    menuRef.current.classList.contains("is-active")
      ? menuRef.current.classList.remove("is-active")
      : menuRef.current.classList.add("is-active");
    burger_ref.current.classList.contains("is-active")
      ? burger_ref.current.classList.remove("is-active")
      : burger_ref.current.classList.add("is-active");
  };

  const navigation = [
    { name: "Dashboard", href: "#", current: true },
    { name: "Team", href: "#", current: false },
    { name: "Projects", href: "#", current: false },
    { name: "Calendar", href: "#", current: false },
  ];

  return (
    <>
      <nav className="bg-slate-800 w-full md:flex fixed lg:px-28">
        {/* first nav group nav logo etc */}
        <div className="flex items-center justify-around gap-10">
        <a className="flex items-center gap-3 p-4 hover:bg-slate-900 transition-colors cursor-pointer w-fit justify-center">
            <img src={blog_icon} alt="" className="h-8 w-auto" />
            <h1 className="text-slate-300 text-1xl lg:text-2xl">Basic Blog</h1>
          </a>

          {/* burger for mobile */}
          <div className="flex flex-col gap-1 bg-slate-500 p-2 rounded-md cursor-pointer bg-opacity-25 md:hidden">
            <div className="bg-slate-300 h-0.5 w-7"></div>
            <div className="bg-slate-300 h-0.5 w-7"></div>
            <div className="bg-slate-300 h-0.5 w-7"></div>
          </div>
        </div>

        {/* second nav group */}
        <div className="items-center gap-2 md:gap-7 pb-3 w-full md:w-fit md:p-3 flex-col md:flex-row justify-around flex">
          <hr className="h-px mt-0 bg-gray-200 border-0 dark:bg-gray-700 w-full" />
          <button className="hover:bg-slate-900 bg-slate-700 bg-opacity-50 transition-colors px-3 py-2 rounded-lg sm:h-fit md:h-full text-slate-300 w-9/12 sm:w-6/12 text-center">
            Signup
          </button>
          <button className="hover:bg-slate-900 bg-slate-700 bg-opacity-50 transition-colors px-3 py-2 rounded-lg sm:h-fit md:h-full text-slate-300 w-9/12 sm:w-6/12 text-center">
            Login
          </button>
          {user === null || (
            <>
              <button className="hover:bg-slate-900 bg-slate-700 bg-opacity-50 transition-colors px-3 py-2 rounded-lg sm:h-fit md:h-full text-slate-300 w-9/12 sm:w-6/12 text-center block md:hidden">
                Profile
              </button>
              <button className="hover:bg-slate-900 bg-slate-700 bg-opacity-50 transition-colors px-3 py-2 rounded-lg sm:h-fit md:h-full text-slate-300 w-9/12 sm:w-6/12 text-center block md:hidden">
                Create Blogs
              </button>

              <button className="hover:bg-slate-900 bg-slate-700 bg-opacity-50 transition-colors px-3 py-2 rounded-lg sm:h-fit md:h-full text-slate-300 w-9/12 sm:w-6/12 text-center block md:hidden">
                Your blogs
              </button>
              <hr className="h-px mt-1 bg-gray-200 border-0 dark:bg-gray-700 w-full" />
              <button className="hover:bg-slate-900 bg-slate-700 bg-opacity-50 transition-colors px-3 py-2 rounded-lg sm:h-fit md:h-full text-slate-300 w-9/12 sm:w-6/12 text-center block md:hidden">
                Log out
              </button>
            </>
          )}
        </div>
        
        <div className="grid flex-grow">
          <a
              href="https://github.com/MarisaCodes/basic-blog-react"
              className="items-center gap-3 p-4 hover:bg-slate-900 transition-colors cursor-pointer justify-center hidden md:flex justify-self-end"
            >
              <img src={github} alt="" className="h-8 w-auto" />
              <h1 className="text-slate-300">GitHube Repo</h1>
            </a>
        </div>
        
      </nav>
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
