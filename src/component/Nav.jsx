import { useState } from "react";
import cleverBook from "../assets/CleverBook_transparent.png";
import { NavLink } from "react-router-dom";
import Profile from "./Profile";
import { Menu, X } from "lucide-react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#151218] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[70px]">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={cleverBook}
              alt="CleverBook Logo"
              className="h-40 w-auto object-cover"
            />
          </div>

          {/* Hamburger for mobile */}
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
            <li><NavLink to="/" className="hover:text-blue-400">Home</NavLink></li>
            <li><Profile /></li>
            <li className="hover:text-blue-400 cursor-pointer">Pricing</li>
            <li> <NavLink to="/industry"  className="hover:text-blue-400 cursor-pointer">Industry</NavLink></li>
            <li className="hover:text-blue-400 cursor-pointer">Customer Stories</li>
            <li><NavLink to="/about" className="hover:text-blue-400">About</NavLink></li>
            <li className="hover:text-blue-400 cursor-pointer">Blog</li>
          </ul>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <NavLink to="/login" className="text-slate-300 hover:text-[#551A8b] text-[15px]">
              Login
            </NavLink>
            <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full px-4 py-2 text-sm">
              Talk To Us
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-4 pb-6 space-y-3 bg-[#151218] text-sm font-medium">
          <NavLink to="/" className="block hover:text-blue-400">Home</NavLink>
          <Profile />
          <span className="block hover:text-blue-400 cursor-pointer">Pricing</span>
          <span className="block hover:text-blue-400 cursor-pointer">Industry</span>
          <span className="block hover:text-blue-400 cursor-pointer">Customer Stories</span>
          <NavLink to="/about" className="block hover:text-blue-400">About</NavLink>
          <span className="block hover:text-blue-400 cursor-pointer">Blog</span>
          <NavLink to="/login" className="block text-slate-300 hover:text-[#551A8b]">Login</NavLink>
          <button className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full px-4 py-2 text-sm">
            Talk To Us
          </button>
        </div>
      )}
    </nav>
  );
}

export default Nav;
