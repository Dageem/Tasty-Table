import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="bg-white border-r border-gray-300 h-full flex justify-evenly mt-[10%]">
            <Link to="/account" className="text-blue-600 hover:underline py-2">
                Account
            </Link>
            <Link to="/saved" className="text-blue-600 hover:underline py-2">
                Saved
            </Link>
            <Link to="/visualize" className="text-blue-600 hover:underline py-2">
                Visualize
            </Link>
            <Link to="/recipes" className="text-blue-600 hover:underline py-2">
                Recipes
            </Link>
        </div>
    );
}

export default Sidebar;
