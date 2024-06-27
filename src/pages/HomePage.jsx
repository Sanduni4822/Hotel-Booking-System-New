import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../assets/homepage/slideshow1.jpg';
import image2 from '../assets/homepage/slideshow2.jpg';
import image3 from '../assets/homepage/slideshow3.jpg';
import image4 from '../assets/homepage/slideshow4.jpg';
import image5 from '../assets/homepage/slideshow5.jpg';

const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        <div>
          <img src={image1} alt="Slideshow Image 1" className="w-full h-screen object-cover" />
        </div>
        <div>
          <img src={image2} alt="Slideshow Image 2" className="w-full h-screen object-cover" />
        </div>
        <div>
          <img src={image3} alt="Slideshow Image 3" className="w-full h-screen object-cover" />
        </div>
        <div>
        <img src={image4} alt="Slideshow Image 4" className="w-full h-screen object-cover" />
        </div>
        <div>
        <img src={image5} alt="Slideshow Image 5" className="w-full h-screen object-cover" />
        </div>
      </Slider>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold">Welcome to HotelBooking</h1>
          <p className="mt-4 text-2xl">Book your stay and enjoy Luxury</p>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
