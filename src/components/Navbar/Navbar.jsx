import React from "react";

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <button className="mr-5 border-0 py-1 px-3  rounded ">Home</button>
          <button className="mr-5 border-0 py-1 px-3  rounded ">About</button>
          <button className="mr-5 border-0 py-1 px-3  rounded ">Contact Us</button>
          <button className="border-0 py-1 px-3 rounded">Blog</button>
        </nav>
        <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">PATHSHALA</span>
        </a>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <button className="inline-flex text-white items-center bg-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-base mt-4 md:mt-0">
            Login   
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
