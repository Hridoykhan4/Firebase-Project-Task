import { Link, NavLink } from "react-router-dom";
import watchLogo from "../assets/watchLogo.png";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, signOutUser } = useAuth();

  const links = (
    <>
      <li className="">
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/brands">Brands</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/myProfile">My Profile</NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink to="/aboutUs">About Us</NavLink>
      </li>
    </>
  );

  const handleUserLogOut = () => {
    signOutUser();
    toast.success("✅ Logout Successful!", {
      duration: 4000,
      position: "bottom-left",

      style: {
        background: "#0f766e",
        color: "#ffffff",
        border: "2px solid #14b8a6",
        padding: "16px",
        borderRadius: "12px",
        fontWeight: "bold",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
      },
      className: "",

      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },

      removeDelay: 1000,
    });
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img className="w-20 object-cover" src={watchLogo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end cursor-pointer">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <img
                className=" h-10 w-10 rounded-full object-cover"
                src={user?.photoURL}
                alt=""
              />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 right-2 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>{user?.email || "Email Not Found"}</a>
              </li>
              <li>
                <button onClick={handleUserLogOut} className="btn">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="btn">
            login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
