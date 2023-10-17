import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Carousel = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...carouselSettings}>
      <Link to="/categories/Chinese">
      <div className="slide flex flex-col items-center justify-center">
          <div className="rounded-full overflow-hidden mx-2">
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
      <div className="slide flex flex-col items-center justify-center">
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
      <Link to="/categories/thai">
      <div className="slide flex flex-col items-center justify-center">
          <div className="rounded-full overflow-hidden mx-2">
            <img
              src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/1296x728-header.jpg?w=1155&h=1528"
              alt=""
              className="w-32 h-32 object-cover rounded-full"
            />
          </div>
          <h1 className="rounded text-l font-bold text-center">Thai</h1>
        </div>
      </Link>
      <Link to="/categories/indian">
      <div className="slide flex flex-col items-center justify-center">
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
      <Link to="/categories/korean">
      <div className="slide flex flex-col items-center justify-center">
          <div className="rounded-full overflow-hidden mx-2">
            <img
              src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2019_50/3144056/191211-korean-beef-bulgogi-ew-118p.jpg"
              alt=""
              className="w-32 h-32 object-cover rounded-full"
            />
          </div>
          <h1 className="rounded text-l font-bold text-center">Korean</h1>
        </div>
      </Link>
      <Link to="/categories/breakfast">
      <div className="slide flex flex-col items-center justify-center">
          <div className="rounded-full overflow-hidden mx-2">
            <img
              src="https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2021-09-breakfast-grits%2FNew%20Finals%2F2021-10-12_ATK8035"
              alt=""
              className="w-32 h-32 object-cover rounded-full"
            />
          </div>
          <h1 className="rounded text-l font-bold text-center">Breakfast</h1>
        </div>
      </Link>
      <Link to="/categories/lunch">
      <div className="slide flex flex-col items-center justify-center">
          <div className="rounded-full overflow-hidden mx-2">
            <img
              src="https://www.instacart.com/company/wp-content/uploads/2023/04/lunch-ideas-for-work-hero.jpg"
              alt=""
              className="w-32 h-32 object-cover rounded-full"
            />
          </div>
          <h1 className="rounded text-l font-bold text-center">Lunch</h1>
        </div>
      </Link>
      <Link to="/categories/dinner">
      <div className="slide flex flex-col items-center justify-center">
          <div className="rounded-full overflow-hidden mx-2">
            <img
              src="https://static01.nyt.com/images/2023/09/13/multimedia/11WEEKNIGHT-still-zwhl/11WEEKNIGHT-still-zwhl-master675.jpg"
              alt=""
              className="w-32 h-32 object-cover rounded-full"
            />
          </div>
          <h1 className="rounded text-l font-bold text-center">Dinner</h1>
        </div>
      </Link>
    </Slider>
  );
};

export default Carousel;
