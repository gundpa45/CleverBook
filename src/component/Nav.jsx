import { useState, useEffect } from "react";
import cleverBook from "../assets/CleverBook_transparent.png";
import { NavLink } from "react-router-dom";
import Profile from "./Profile";
import { Menu, X } from "lucide-react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  // Detect when page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Pricing", to: "/pricing" },
    { label: "Industry", to: "/industry" },
    { label: "Customer Stories", to: "/CustomerStories" },
    { label: "Product", to: "/ProductSection" },
    { label: "About", to: "/about" },
    { label: "Blog", to: "https://techthinkersblog.onrender.com", external: true },
  ];

  return (
    <nav
      className={`${
        scrolling ? "bg-[#1a1720] shadow-lg" : "bg-transparent"
      } sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ease-in-out`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[72px]">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={cleverBook}
              alt="CleverBook Logo"
              className="h-16 w-auto object-contain"
            />
          </div>

          {/* Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.to}>
                {link.external ? (
                  <a
                    href={link.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-purple-400 transition-all duration-200"
                  >
                    {link.label}
                  </a>
                ) : (
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `transition-all duration-200 ${
                        isActive
                          ? "text-emerald-400 font-semibold"
                          : "text-white hover:text-purple-400"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                )}
              </li>
            ))}
            <li>
              <Profile />
            </li>
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <NavLink
              to="/login"
              className="text-gray-300 hover:text-emerald-400 text-sm font-medium"
            >
              Login
            </NavLink>
            <NavLink to="/talkTous">
              <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full px-4 py-2 text-sm hover:scale-105 transition">
                Talk To Us
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 py-4 space-y-4 bg-[#1a1720] border-t border-[#ffffff1a] text-sm font-medium">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.to}
                href={link.to}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCloseMenu}
                className="block text-white hover:text-purple-400 transition"
              >
                {link.label}
              </a>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={handleCloseMenu}
                className="block text-white hover:text-purple-400 transition"
              >
                {link.label}
              </NavLink>
            )
          )}
          <Profile />
          <NavLink
            to="/login"
            onClick={handleCloseMenu}
            className="block text-gray-300 hover:text-emerald-400"
          >
            Login
          </NavLink>
          <NavLink to="/talkTous" onClick={handleCloseMenu}>
            <button className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full px-4 py-2 text-sm hover:scale-105 transition">
              Talk To Us
            </button>
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Nav;
