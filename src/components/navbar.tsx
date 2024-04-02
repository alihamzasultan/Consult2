import React from 'react';

const Navbar = () => {
  return (
    <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
      <a href="/" className="py-2 px-6 flex">
        Home
      </a>
      <a href="/aboutUs" className="py-2 px-6 flex">
        About Us
      </a>
      <a href="/contact" className="py-2 px-6 flex">
        Contact
      </a>
      <a href="#" className="py-2 px-6 flex">
        Login
      </a>
      <a href="/login" className="py-2 px-6 flex">
        Sign Up
      </a>
    </nav>
  );
}

export default Navbar;
