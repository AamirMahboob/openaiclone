import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Dropdown = ({ title, items }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <li className='md:pr-3 relative hover:underline hover:underline-offset-2'>
      <button
        onFocus={toggleDropdown}
        onBlur={toggleDropdown}
        className="text-white hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-white md:p-0 font-medium flex items-center justify-between w-full md:w-auto"
      >
        {title}
        <svg
          className={`w-4 h-4 ml-1 ${isDropdownOpen ? 'transform rotate-180' : ''}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>

    
      <div
        className={`bg-black text-base z-10 list-none divide-y divide-gray-100 rounded shadow absolute  w-44 ${isDropdownOpen ? '' : 'hidden'}`}
      >
        <ul className="py-1" aria-labelledby="dropdownLargeButton">
          {items.map((item, index) => (
            <li key={index}>
             <Link    onClick={()=>console.log('fjhn')} className="text-sm hover:text-white text-white block px-4 py-2">
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <div className="py-1">
          <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Sign out</a>
        </div>
      </div>
    </li>
  );
};

export default Dropdown;

