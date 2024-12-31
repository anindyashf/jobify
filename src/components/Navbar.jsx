import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../utils/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { authData, clearAuthData } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    clearAuthData();
    window.location.reload();
    navigate("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 shadow-sm">
      <div className="container flex items-center justify-between mx-auto">
        <Link to="/" className="flex items-center py-2">
          <span className="self-center text-xl font-semibold whitespace-nowrap">
            <img src="/Logo-Jobify.png" className="w-[100px]" />
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            <li>
              <Link to="/" className="text-gray-700 hover:text-primary transition-all">
                Home
              </Link>
            </li>
            <li>
              <Link to="/vacancy" className="text-gray-700 hover:text-primary transition-all">
                Vacancy
              </Link>
            </li>
            {authData && (
              <li>
                <Link
                  to="/dashboard"
                  className="text-gray-700 hover:text-primary transition-all"
                >
                  Dashboard
                </Link>
              </li>
            )}
          </ul>

          {/* Profile Section (Always visible on desktop) */}
          {authData ? (
            <div className="flex items-center gap-4">
              <div className="w-[40px] h-[40px] overflow-hidden rounded-full">
                <img
                  className="w-full h-full object-cover"
                  src={authData.user.image_url}
                  alt="User Avatar"
                />
              </div>
              <span className="text-gray-700 text-lg font-medium">{authData.user.name}</span>

              {/* Logout Button */}
              <button
                className="ml-4 bg-red-500 hover:bg-red-400 text-white py-1 px-4 rounded-lg transition-all"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-4">
              <Link
                to="/login"
                className="bg-white border-2 border-primary text-primary py-2 px-6 rounded-lg hover:bg-primary hover:text-white transition-all"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-primary hover:bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-primary-dark transition-all"
              >
                Register
              </Link>
            </div>
          )}
        </div>

        {/* Hamburger icon for mobile */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 transition-transform transform duration-500 md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Background overlay */}
        <div
          className={`fixed inset-0 bg-black ${isMenuOpen ? "opacity-50" : "opacity-0"} transition-opacity duration-500`}
          onClick={toggleMenu}
        ></div>

        {/* Menu content */}
        <div className="fixed top-0 right-0 w-3/4 max-w-sm h-full bg-white shadow-lg p-6 flex flex-col">
          {/* Profile Section */}
          {authData && (
            <div className="flex items-center gap-4 mb-6">
              <div className="w-[40px] h-[40px] overflow-hidden rounded-full">
                <img
                  className="w-full h-full object-cover"
                  src={authData.user.image_url}
                  alt="User Avatar"
                />
              </div>
              <span className="text-gray-700 text-lg font-medium">{authData.user.name}</span>
            </div>
          )}

          <ul className="flex flex-col gap-4">
            <li>
              <Link
                to="/"
                className="text-gray-700 text-lg hover:text-primary transition-all"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/vacancy"
                className="text-gray-700 text-lg hover:text-primary transition-all"
                onClick={toggleMenu}
              >
                Vacancy
              </Link>
            </li>
            {authData && (
              <li>
                <Link
                  to="/dashboard"
                  className="text-gray-700 text-lg hover:text-primary transition-all"
                  onClick={toggleMenu}
                >
                  Dashboard
                </Link>
              </li>
            )}
            {authData ? (
              <li>
                <button
                  className="bg-red-500 hover:bg-red-400 text-white text-lg px-2 py-1 rounded-lg transition-all"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li className="flex gap-2">
                  <Link
                    to="/login"
                    className="bg-white border-2 border-primary text-primary py-2 px-6 rounded-lg hover:bg-primary hover:text-white transition-all"
                    onClick={toggleMenu}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="bg-primary hover:bg-blue-500 text-white py-2 px-6 rounded-lg transition-all"
                    onClick={toggleMenu}
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
