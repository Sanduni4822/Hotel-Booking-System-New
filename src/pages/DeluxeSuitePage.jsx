import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import image1 from '../assets/Deluxesuite/image1.jpg'; 
import image2 from '../assets/Deluxesuite/image2.jpg'; // Add more images
import image3 from '../assets/Deluxesuite/image3.jpg'; 
import image4 from '../assets/Deluxesuite/image4.jpg';

const DeluxeSuitePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="p-6">
      {/* Two Columns Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Column (Title, Image Slider, and Paragraph) */}
        <div>
          <h1 className="text-3xl font-bold mb-4">Deluxe Suite</h1>
          
          {/* Image Slider Section */}
          <div className="mb-6">
            <Slider {...settings}>
              <div>
                <img src={image1} alt="Deluxe Suite 1" className="w-full h-auto rounded-lg shadow-md" />
              </div>
              <div>
                <img src={image2} alt="Deluxe Suite 2" className="w-full h-auto rounded-lg shadow-md" />
              </div>
              <div>
                <img src={image3} alt="Deluxe Suite 3" className="w-full h-auto rounded-lg shadow-md" />
              </div>
              <div>
                <img src={image4} alt="Deluxe Suite 3" className="w-full h-auto rounded-lg shadow-md" />
              </div>
            </Slider>
          </div>

          {/* Text Section */}
          <p className="text-lg">
            The Deluxe Suite at our seaside hotel offers a luxurious escape with stunning ocean views and premium amenities designed for ultimate comfort. This spacious suite features a stylish, modern decor and comes equipped with free Wi-Fi, allowing you to stay connected effortlessly. Enjoy the convenience of an air conditioner to maintain the perfect temperature, and a refreshing shower to unwind after a day at the beach. The suite includes a well-stocked minibar, ensuring your favorite beverages are always within reach. For added security, a personal safety locker is provided to keep your valuables secure. Start your day right with a complimentary breakfast, featuring a variety of delicious options. Fresh towels are provided daily, and our dedicated cleaning service ensures the suite remains spotless throughout your stay.
          </p>
        </div>

        {/* Right Column (Empty) */}
        <div></div>
        
      </div>
    </div>
  );
};

export default DeluxeSuitePage;
