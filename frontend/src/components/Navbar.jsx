import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => setMenuActive(!menuActive);
  const closeMenu = () => setMenuActive(false);

  const links = [
    { path: "/", label: "Home" },
    { path: "/goals", label: "Goals" },
    { path: "/about", label: "About" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-xl shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-8">
        <Link
          to="/"
          className="text-2xl font-semibold text-white"
          onClick={closeMenu}
        >
          To Do Hub
        </Link>

        <ul className="hidden md:flex gap-6">
          {links.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `text-white font-medium px-5 py-1 rounded-2xl border-2
                    border-transparent transition-all duration-700 ${
                      isActive
                        ? "bg-white/20 border-white text-black"
                        : "hover:bg-white/20 hover:border-white"
                    }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden flex flex-col justify-center items-center gap-1 p-2 z-51"
          onClick={toggleMenu}
        >
          <span
            className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${
              menuActive ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${
              menuActive ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${
              menuActive ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>

        <ul
          className={`fixed top-0 right-0 h-full w-64 bg-transparent backdrop-blur-xl z-50
             shadow-lg flex flex-col gap-7 pt-32 px-6 transform transition-transform duration-300 md:hidden ${
               menuActive ? "translate-x-0" : "translate-x-full"
             }`}
        >
          {links.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `block text-white text-lg font-medium px-5 py-2 rounded-2xl border-2 border-transparent transition-all duration-700 ${
                    isActive
                      ? "bg-white/20 border-white text-black"
                      : "hover:bg-white/20 hover:border-white"
                  }`
                }
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
