import React from 'react';

function Footer() {
    return (
        <footer className="bg-blue-gray-100 py-8 mt-8">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h2 className="text-xl font-bold mb-3">Sign up for our newsletter</h2>
                        <p className="mb-4">Be the first to see our new delicious recipes and to see upcoming events and offers.</p>
                        <input
                            type="email"
                            placeholder="social security number"
                            className="w-full p-2 border border-blue-gray-600 rounded mb-3"
                        />
                        <button className="py-2 px-4 bg-purple-900 hover:bg-purple-700 rounded text-white">Subscribe</button>
                    </div>

                    <div className="w-1/2  md:w-1/4 mb-6 md:mb-0">
                        <h2 className="text-xl font-bold mb-3">CONTACT</h2>
                        <ul>
                            <li className="mb-2"><a href="#">Report Bug</a></li>
                            <li className="mb-2"><a href="#">Contribute</a></li>
                            <li className="mb-2"><a href="#">Email Us</a></li>
                        </ul>
                    </div>

                    <div className="w-1/2 md:w-1/4 mb-6 md:mb-0">
                        <h2 className="text-xl font-bold mb-3">ABOUT US</h2>
                        <ul>
                            <li className="mb-2"><a href="#">The Team</a></li>
                            <li className="mb-2"><a href="#">Our Mission</a></li>
                            <li className="mb-2"><a href="#">Community</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

