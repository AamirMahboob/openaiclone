import React, { useState } from 'react';
import chat from '../assets/chat.png';

function Navbar1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <img src={chat} className="h-8 mr-3" alt="Chat" />
        </a>

        <div
          className="cursor-pointer md:hidden text-white"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <p className="text-white">Close</p> : <p className="text-white">Menu</p>}
        </div>

        <div className={`md:hidden w-full ${isMenuOpen ? '' : 'hidden'}`} id="mobile-navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                aria-current="page"
              >
                Home
              </a>
            </li>
            {/* Add more list items here */}
          </ul>
        </div>

        <div className="hidden w-full md:block md:w-auto" id="desktop-navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                aria-current="page"
              >
                About
              </a>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar1;
