import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center text-white fixed w-full left-0">
      <div className="w-full lg:w-10/12 flex items-center mx-auto gap-3 p-3 bg-red-900 h-16">
        <button title="menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <h1 className="text-xl text-center font-bold">Project Issue Tracker</h1>
      </div>
    </nav>
  );
};

export default Navbar;
