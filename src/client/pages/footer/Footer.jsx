import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Registered successfully!");
    console.log("Submitted:", email);
    setEmail("");
  };
  return (
    <footer className="bg-blue-gray-100 py-8 mt-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-3">
              Sign up for our newsletter
            </h2>
            <p className="mb-4">
              Be the first to see our new delicious recipes and to see upcoming
              events and offers.
            </p>
            <form onSubmit={handleSubmit} className="mt-4 text-black">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 rounded-l-md focus:outline-none focus:shadow-outline w-[200px]"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white font-bold p-2 rounded-r-md hover:bg-blue-300"
              >
                Subscribe
              </button>
            </form>
            <ToastContainer
              position="top-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </div>

          <div className="w-1/2  md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-3">THE BEST OF</h2>
            <ul>
              <li className="mb-2">
                <a href="/categories/thanksgiving">Thanksgiving Recipes</a>
              </li>
              <li className="mb-2">
                <a href="/categories/halloween">Halloween Recipes</a>
              </li>
              <li className="mb-2">
                <a href="/categories/christmas">Christmas Recipes
</a>
              </li>
            </ul>
          </div>

          <div className="w-1/2 md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-3">ABOUT US</h2>
            <ul>
              <li className="mb-2">
                <a href="/about">The Team</a>
              </li>
              {/* <li className="mb-2">
                <a href="#">Our Mission</a>
              </li>
              <li className="mb-2">
                <a href="#">Community</a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
