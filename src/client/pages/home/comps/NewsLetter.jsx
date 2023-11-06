import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // logic
    console.log('Submitted:', email);
    setEmail('');
  };

  return (
    <div className="bg-blue-gray-900 text-white text-center p-6">
      <h2 className="text-xl md:text-3xl font-bold">Sign Up for Our Newsletter</h2>
      <p className="my-2 text-md lg:text-xl">Be The First To Get The Latest Recipes.</p>
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
    </div>
  );
};

export default Newsletter;
