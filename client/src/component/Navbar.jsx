import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-20 bg-gradient-to-r from-indigo-500 to-purple-500 shadow-md sticky top-0 z-50 px-6 flex items-center justify-between text-white">
      
      {/* Logo */}
      <div className="text-2xl font-bold">BookShelf</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-lg font-medium">
        <li className="hover:text-yellow-300 cursor-pointer transition">Home</li>
        <li className="hover:text-yellow-300 cursor-pointer transition">About</li>
        <li className="hover:text-yellow-300 cursor-pointer transition">Contact</li>
        <li className="hover:text-yellow-300 cursor-pointer transition">Help</li>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-indigo-600 flex flex-col items-start px-6 py-4 space-y-4 md:hidden z-40">
          <span className="hover:text-yellow-300 cursor-pointer">Home</span>
          <span className="hover:text-yellow-300 cursor-pointer">About</span>
          <span className="hover:text-yellow-300 cursor-pointer">Contact</span>
          <span className="hover:text-yellow-300 cursor-pointer">Help</span>
        </div>
      )}
    </div>
  );
};

export default Navbar;
