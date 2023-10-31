import React from 'react';
import { Link } from 'react-router-dom';

function Account(){
    return (
        <div className="flex-none p-4 border border-gray-300 bg-gray-100 rounded">
            <h2 className="text-lg font-bold mb-4">Menu</h2>
            <ul className="space-y-2">
                <li><Link to="/account" className="text-blue-600 hover:underline">Account</Link></li>
                <li><Link to="/saved" className="text-blue-600 hover:underline">Saved</Link></li>
                <li><Link to="/visualize" className="text-blue-600 hover:underline">Visualize</Link></li>
            </ul>
        </div>
    );
}

export default Account;

