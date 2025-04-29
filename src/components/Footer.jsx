import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Footer = () => {
  const { user } = useAuth();

  const links = (
    <>
      <li className="">
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/brands">Brands</Link>
      </li>
      {user && (
        <>
          <li>
            <Link to="/myProfile">My Profile</Link>
          </li>
        </>
      )}
      <li>
        <Link to="/aboutUs">About Us</Link>
      </li>
    </>
  );
  return (
    <footer className="footer flex flex-col md:flex-row justify-between items-center bg-base-200 text-base-content p-10 rounded-lg shadow-lg space-y-6 md:space-y-0">
      {/* Brand Section */}
      <div className="text-center md:text-left space-y-2">
        <h1 className="text-3xl font-extrabold tracking-tight">Discount Pro</h1>
        <p className="text-sm text-gray-500">
          Unlock exclusive deals and save more with us.
        </p>
        <p className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Discount Pro. All rights reserved.
        </p>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col md:flex-row items-center gap-4 text-sm font-medium">
        <ul className="flex flex-col md:flex-row gap-5">{links}</ul>
      </nav>

      {/* Social Icons */}
      <div className="flex gap-5">
        <a
          href="https://github.com/Hridoykhan4"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-primary transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <path d="M12 .5C5.7.5.5 5.7.5 12a11.5 11.5 0 008 11c.5.1.7-.2.7-.5v-2c-3.2.7-3.8-1.4-3.8-1.4-.4-1-1-1.3-1-1.3-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1 3 .8.1-.7.4-1 .7-1.2-2.6-.3-5.4-1.3-5.4-6a4.7 4.7 0 011.2-3.3c-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 016 0c2.4-1.5 3.4-1.2 3.4-1.2.6 1.7.2 2.9.1 3.2.7.8 1.2 1.9 1.2 3.3 0 4.7-2.8 5.7-5.5 6 .4.4.8 1 .8 2v3c0 .3.2.6.7.5a11.5 11.5 0 008-11c0-6.3-5.2-11.5-11.5-11.5z" />
          </svg>
        </a>
        <a
          href="#"
          aria-label="Twitter"
          className="hover:text-primary transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </a>
        <a
          href="#"
          aria-label="Facebook"
          className="hover:text-primary transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.5-1.3 1.1v1.9h2.6l-.4 3h-2.2v7A10 10 0 0022 12z" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
