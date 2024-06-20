import React, { useState } from 'react';
import Image from '../assets/contctimage/Image.jpg';

const RatingComponent = () => {
  const [rating, setRating] = useState(0);
  const [when, setWhen] = useState('');
  const [who, setWho] = useState('');
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewText, setReviewText] = useState('');

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 shadow-md rounded-md mb-8">
      <h2 className="text-lg font-bold mb-2">HOW WOULD YOU RATE YOUR EXPERIENCE?</h2>
      <div className="flex mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            onClick={() => handleRating(star)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={rating >= star ? '#F59E0B' : 'none'}
            stroke="#F59E0B"
            strokeWidth="2"
            className={`w-8 h-8 cursor-pointer ${star < 5 ? 'mr-2' : ''}`}
          >
            <path d="M12 .587l3.668 7.568L24 9.423l-6 5.843 1.417 8.23L12 18.897l-7.417 4.599L6 15.266.001 9.423l8.332-1.268L12 .587z" />
          </svg>
        ))}
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-lg">WHEN DID YOU GO?</label>
        <select
          className="w-full p-2 border rounded-full"
          value={when}
          onChange={(e) => setWhen(e.target.value)}
        >
          <option value="">SELECT ONE</option>
          <option value="January">JANUARY</option>
          <option value="February">FEBRUARY</option>
          <option value="March">MARCH</option>
          <option value="April">APRIL</option>
          <option value="May">MAY</option>
          <option value="June">JUNE</option>
          <option value="July">JULY</option>
          <option value="August">AUGUST</option>
          <option value="September">SEPTEMBER</option>
          <option value="October">OCTOBER</option>
          <option value="November">NOVEMBER</option>
          <option value="December">DECEMBER</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-lg">WHO DID YOU GO WITH?</label>
        <div className="flex flex-wrap gap-2">
          {['BUSINESS', 'COUPLES', 'FAMILY', 'FRIENDS', 'SOLO'].map((option) => (
            <button
              key={option}
              className={`p-2 border rounded-full ${
                who === option ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
              }`}
              onClick={() => setWho(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-lg">WRITE YOUR REVIEW</label>
        <textarea
          className="w-full p-2 border rounded-md"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          rows="4"
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-lg">TITLE YOUR REVIEW</label>
        <input
          type="text"
          className="w-full p-2 border rounded-md"
          value={reviewTitle}
          onChange={(e) => setReviewTitle(e.target.value)}
        />
      </div>
    </div>
  );
};

const ContactUsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="relative w-full">
        <img 
          src={Image}
          alt="Example" 
          className="w-full h-auto max-h-[400px] object-cover mb-8"
        />
      </div>
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="text-left">
          <h1 className="text-4xl font-bold mb-6">
            WE LOVE TO<br />
            <span className="relative">
              HEAR FROM YOU
              <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-black"></span>
            </span>
          </h1>
          <p className="text-xl mb-4">Your hospitality is our priority, Luxury at its finest.</p>
        </div>
        <div className="text-left text-justify">
          <p className="mb-4">
            Hotel La-Vila is a famous hotel and well-known hotel with the best hospitality in Waligama area. We expect to give our guests a better service, to accommodate more guests & give a lifetime experience as a rising hotel.
          </p>
          <p className="mb-4">
            We hope our hotel will give chance to guests to plan their vacation in an effective way by providing numerous facilities and services.
          </p>
          <p className="mb-4">
            We are grateful to you as our valuable guest if you could give reviews about our hotel then it will be really helpful for us. Also, you can contact our hotel anytime for any information.
          </p>
        </div>
      </div>
      <RatingComponent />
    </div>
  );
};

export default ContactUsPage;
