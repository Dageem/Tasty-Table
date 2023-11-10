import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="bg-white h-full flex justify-evenly mt-[10%] w-full">
      <Link to="/" className="text-blue-gray-900 font-semibold border border-blue-gray-900 border-solid py-2 px-2 mr-2 hover:text-white hover:bg-blue-gray-900 w-[33%] text-center">
        Home
      </Link>
      <Link to="/saved" className="text-blue-gray-900 font-semibold border border-blue-gray-900 border-solid py-2 px-2 mr-2 hover:text-white hover:bg-blue-gray-900 w-[33%] text-center">
        Saved
      </Link>
      <Link to="/about" className="text-blue-gray-900 font-semibold border border-blue-gray-900 border-solid py-2 px-2 mr-2 hover:text-white hover:bg-blue-gray-900 w-[33%] text-center">
        About
      </Link>
    </div>
  );
}

export default Sidebar;
