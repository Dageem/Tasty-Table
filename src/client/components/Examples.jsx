import React from 'react'
import { Link } from 'react-router-dom'

function Examples() {
  return (
      <section className="">
        <h1 className="text-3xl font-bold mt-6 mb-2">Popular Recipes</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 shadow-2xl pb-4">
          <Link to="/categories/easy">
            <div className="relative hover:cursor-pointer hover:opacity-70">
              <img
                src="https://www.acouplecooks.com/wp-content/uploads/2021/03/Cheese-Tortellini-011.jpg"
                alt=""
                className="w-full h-[350px]"
              />
              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 p-2 bg-white bg-opacity-80 rounded text-l font-bold">
                Easy Recipes
              </div>
            </div>
          </Link>
          <Link to="/categories/quick">
            <div className="relative hover:cursor-pointer hover:opacity-70">
              <img
                src="https://cdn.britannica.com/13/234013-050-73781543/rice-and-chorizo-burrito.jpg"
                alt=""
                className="w-full h-[350px]"
              />
              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 p-2 bg-white bg-opacity-80 rounded text-l font-bold">
                Quick Recipes
              </div>
            </div>
          </Link>
          <Link to="/allrecipes">
            <div className="relative hover:cursor-pointer hover:opacity-70">
              <img
                src="https://sourcehealthcenter.com/wp-content/uploads/2021/09/thanksgiving-table.jpg"
                alt=""
                className="w-full h-[350px]"
              />
              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 p-2 bg-white bg-opacity-80 rounded text-l font-bold">
                All Recipes
              </div>
            </div>
          </Link>
        </div>
      </section>
  )
}

export default Examples
