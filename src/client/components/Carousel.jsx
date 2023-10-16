import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 images per slide
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...carouselSettings}>
      <div className="slide">
        <div className="rounded-full overflow-hidden mx-2">
          <img
            src="https://ik.imagekit.io/awwybhhmo/satellite_images/chinese/gray/about_us/2.jpg?tr=w-3840"
            alt=""
            className="w-32 h-32 object-cover rounded-full"
          />
        </div>
        <h1 className="rounded text-l font-bold text-left">Chinese</h1>
      </div>
      <div className="slide">
        <div className="rounded-full overflow-hidden mx-2">
          <img
            src="https://insanelygoodrecipes.com/wp-content/uploads/2022/10/Homemade-Vegan-Mexican-Beef-Tacos-with-Herbs-500x375.jpg"
            alt=""
            className="w-32 h-32 object-cover rounded-full"
          />
        </div>
        <h1 className="rounded text-l font-bold text-left">Mexican</h1>
      </div>
      <div className="slide">
        <div className="rounded-full overflow-hidden mx-2">
          <img
            src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/1296x728-header.jpg?w=1155&h=1528"
            alt=""
            className="w-32 h-32 object-cover rounded-full"
          />
        </div>
        <h1 className="rounded text-l font-bold text-left">Thai</h1>
      </div>
      <div className="slide">
        <div className="rounded-full overflow-hidden mx-2">
          <img
            src="https://www.saga.co.uk/contentlibrary/saga/publishing/verticals/travel/destinations/asia/traditional-indian-food.jpg"
            alt=""
            className="w-32 h-32 object-cover rounded-full"
          />
        </div>
        <h1 className="rounded text-l font-bold text-left">Indian</h1>
      </div>
      <div className="slide">
        <div className="rounded-full overflow-hidden mx-2">
          <img
            src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2019_50/3144056/191211-korean-beef-bulgogi-ew-118p.jpg"
            alt=""
            className="w-32 h-32 object-cover rounded-full"
          />
        </div>
        <h1 className="rounded text-l font-bold text-left">Korean</h1>
      </div>
    </Slider>
  );
};

export default Carousel;


