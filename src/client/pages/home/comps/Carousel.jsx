import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query";

const Carousel = () => {
  const isMobile = useMediaQuery("(max-width: 639px)");

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 2 : 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div>
      <div className="p-4 mb-3">
        <h1 className="text-2xl text-center font-bold">
          Search Recipes
        </h1>
        <input
          type="text"
          placeholder="Search recipes..."
          className="border border-blue-gray-900 rounded-lg p-2 w-[90%] ml-[5%] lg:w-[70%] lg:ml-[15%]"
        />
      </div>
      <Slider {...carouselSettings}>
        <Link to="/categories/chinese">
          <div className="slide flex flex-col items-center justify-center hover:opacity-70">
            <div className="rounded-full overflow-hidden mx-2 ">
              <img
                src="https://ik.imagekit.io/awwybhhmo/satellite_images/chinese/gray/about_us/2.jpg?tr=w-3840"
                alt=""
                className="w-32 h-32 object-cover rounded-full"
              />
            </div>
            <h1 className="rounded text-l font-bold text-center">Chinese</h1>
          </div>
        </Link>
        <Link to="/categories/mexican">
          <div className="slide flex flex-col items-center justify-center hover:opacity-70">
            <div className="rounded-full overflow-hidden mx-2">
              <img
                src="https://insanelygoodrecipes.com/wp-content/uploads/2022/10/Homemade-Vegan-Mexican-Beef-Tacos-with-Herbs-500x375.jpg"
                alt=""
                className="w-32 h-32 object-cover rounded-full"
              />
            </div>
            <h1 className="rounded text-l font-bold text-center">Mexican</h1>
          </div>
        </Link>
        <Link to="/categories/indian">
          <div className="slide flex flex-col items-center justify-center hover:opacity-70">
            <div className="rounded-full overflow-hidden mx-2">
              <img
                src="https://www.saga.co.uk/contentlibrary/saga/publishing/verticals/travel/destinations/asia/traditional-indian-food.jpg"
                alt=""
                className="w-32 h-32 object-cover rounded-full"
              />
            </div>
            <h1 className="rounded text-l font-bold text-center">Indian</h1>
          </div>
        </Link>
        <Link to="/categories/dessert">
          <div className="slide flex flex-col items-center justify-center hover:opacity-70">
            <div className="rounded-full overflow-hidden mx-2">
              <img
                src="https://static01.nyt.com/images/2023/09/13/multimedia/11WEEKNIGHT-still-zwhl/11WEEKNIGHT-still-zwhl-master675.jpg"
                alt=""
                className="w-32 h-32 object-cover rounded-full"
              />
            </div>
            <h1 className="rounded text-l font-bold text-center">Dessert</h1>
          </div>
        </Link>
        <Link to="/categories/italian">
          <div className="slide flex flex-col items-center justify-center hover:opacity-70">
            <div className="rounded-full overflow-hidden mx-2">
              <img
                src="https://static01.nyt.com/images/2023/09/13/multimedia/11WEEKNIGHT-still-zwhl/11WEEKNIGHT-still-zwhl-master675.jpg"
                alt=""
                className="w-32 h-32 object-cover rounded-full"
              />
            </div>
            <h1 className="rounded text-l font-bold text-center">Italian</h1>
          </div>
        </Link>
        <Link to="/categories/sandwich">
          <div className="slide flex flex-col items-center justify-center hover:opacity-70">
            <div className="rounded-full overflow-hidden mx-2">
              <img
                src="https://static01.nyt.com/images/2023/09/13/multimedia/11WEEKNIGHT-still-zwhl/11WEEKNIGHT-still-zwhl-master675.jpg"
                alt=""
                className="w-32 h-32 object-cover rounded-full"
              />
            </div>
            <h1 className="rounded text-l font-bold text-center">Sandwich</h1>
          </div>
        </Link>
        <Link to="/categories/bbq">
          <div className="slide flex flex-col items-center justify-center hover:opacity-70">
            <div className="rounded-full overflow-hidden mx-2">
              <img
                src="https://static01.nyt.com/images/2023/09/13/multimedia/11WEEKNIGHT-still-zwhl/11WEEKNIGHT-still-zwhl-master675.jpg"
                alt=""
                className="w-32 h-32 object-cover rounded-full"
              />
            </div>
            <h1 className="rounded text-l font-bold text-center">BBQ</h1>
          </div>
        </Link>
        <Link to="/categories/mediterranean">
          <div className="slide flex flex-col items-center justify-center hover:opacity-70">
            <div className="rounded-full overflow-hidden mx-2">
              <img
                src="https://static01.nyt.com/images/2023/09/13/multimedia/11WEEKNIGHT-still-zwhl/11WEEKNIGHT-still-zwhl-master675.jpg"
                alt=""
                className="w-32 h-32 object-cover rounded-full"
              />
            </div>
            <h1 className="rounded text-l font-bold text-center">Mediterranean</h1>
          </div>
        </Link>
        <Link to="/categories/seafood">
          <div className="slide flex flex-col items-center justify-center hover:opacity-70">
            <div className="rounded-full overflow-hidden mx-2">
              <img
                src="https://static01.nyt.com/images/2023/09/13/multimedia/11WEEKNIGHT-still-zwhl/11WEEKNIGHT-still-zwhl-master675.jpg"
                alt=""
                className="w-32 h-32 object-cover rounded-full"
              />
            </div>
            <h1 className="rounded text-l font-bold text-center">Seafood</h1>
          </div>
        </Link>
        <Link to="/categories/vegan">
          <div className="slide flex flex-col items-center justify-center hover:opacity-70">
            <div className="rounded-full overflow-hidden mx-2">
              <img
                src="https://static01.nyt.com/images/2023/09/13/multimedia/11WEEKNIGHT-still-zwhl/11WEEKNIGHT-still-zwhl-master675.jpg"
                alt=""
                className="w-32 h-32 object-cover rounded-full"
              />
            </div>
            <h1 className="rounded text-l font-bold text-center">Vegan</h1>
          </div>
        </Link>
      </Slider>
    </div>
  );
};

export default Carousel;
