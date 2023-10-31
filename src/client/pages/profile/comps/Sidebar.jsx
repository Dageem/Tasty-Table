// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="flex flex-col items-center justify-center w-3/4 p-4 border-2 border-gray-300 bg-white rounded">
            <div className="group space-y-4 divide-y divide-gray-400 w-full divide-border-3 ">
                <div><Link to="/account" className="text-blue-600 hover:underline block py-2  bg-white-100 group-hover:bg-gray-100 transition-opacity duration-300">Account</Link></div>
                <div><Link to="/saved" className="text-blue-600 hover:underline block py-2">Saved</Link></div>
                <div><Link to="/visualize" className="text-blue-600 hover:underline block py-2">Visualize</Link></div>
            </div>
        </div>
    );
}


export default Sidebar;
