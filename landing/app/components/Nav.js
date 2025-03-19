import React from 'react';

const Nav = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center pt-4 px-4 sm:px-12 py-4 shadow-md">
      {/* Adjusted padding and flex direction */}

      {/* for the logo */}
      <div className="flex justify-start items-center mb-4 sm:mb-0">
        {/* Adjusted logo size */}
        <div>
          <img src="/images/tree.png" alt="tree" className="w-10 sm:w-12 md:w-14" />
        </div>
        <div className="pt-3">
          <img src="/images/farm.png" alt="farm" className="w-10 sm:w-12 md:w-14" />
        </div>
      </div>

      {/* for the nav */}
      <div className="hidden sm:flex items-center justify-between mb-4 sm:mb-0">
        {/* Hide nav on small screens, show on larger */}
        <ul className="flex flex-row">
          <li className="inline-block p-2 sm:p-5">
            <a href="#">About</a>
          </li>
          <li className="inline-block p-2 sm:p-5">
            <a href="#">Services</a>
          </li>
          <li className="inline-block p-2 sm:p-5">
            <a href="#">Contact</a>
          </li>
          <li className="inline-block p-2 sm:p-5">
            <a href="#">Products</a>
          </li>
        </ul>
      </div>

      {/* for the button */}
      <div className="flex justify-end items-center">
        <button className="border border-gray-400 px-4 py-2 bg-transparent rounded-md font-semibold">
          Button
        </button>
      </div>
    </div>
  );
};

export default Nav;