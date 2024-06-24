import React, { useState } from 'react';
import Image from '../assets/contctimage/Image.jpg';

const RatingComponent = () => {
  const [rating, setRating] = useState(0);
  const [when, setWhen] = useState('');
  const [who, setWho] = useState('');
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [photos, setPhotos] = useState([]);
  const [isCertified, setIsCertified] = useState(false);
  const [reviewError, setReviewError] = useState('');

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handlePhotoChange = (e) => {
    setPhotos([...e.target.files]);
  };

  const handleContinue = () => {
    if (!reviewText) {
      setReviewError('Review text is required.');
      return;
    }

    // Reset the error if the review text is not empty
    setReviewError('');

    // Handle the continue button click event
    console.log({
      rating,
      when,
      who,
      reviewTitle,
      reviewText,
      photos,
      isCertified,
    });
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
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
          <div className="mb-4 relative">
            <label className="block mb-2 text-lg font-bold">WHEN DID YOU GO?</label>
            <div className="relative">
              <select
                className="w-full p-2 pr-10 border rounded-full appearance-none"
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 0 1 1.414-1.414L10 9.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-.707.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-lg font-bold">WHO DID YOU GO WITH?</label>
            <div className="flex flex-wrap gap-2">
              {['BUSINESS', 'COUPLES', 'FAMILY', 'FRIENDS', 'SOLO'].map((option) => (
                <button
                  key={option}
                  className={`p-2 border rounded-full ${who === option ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
                  onClick={() => setWho(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="mb-4">
            <label className="block mb-2 text-lg font-bold">WRITE YOUR REVIEW</label>
            <textarea
              className="w-full p-2 border rounded-md"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              rows="4"
            ></textarea>
            {reviewError && <p className="text-red-500 text-sm mt-1">{reviewError}</p>}
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-lg font-bold">TITLE YOUR REVIEW</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              value={reviewTitle}
              onChange={(e) => setReviewTitle(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-lg font-bold">ADD SOME PHOTOS <span className="text-sm font-normal">(OPTIONAL)</span></label>
        <div className="border border-dashed border-gray-400 rounded-md p-4 text-center">
          <input
            type="file"
            className="hidden"
            id="photo-upload"
            multiple
            onChange={handlePhotoChange}
          />
          <label htmlFor="photo-upload" className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 mx-auto mb-2 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v14m7-7H5"
              />
            </svg>
            <span className="text-gray-600">Click to add photos or drag and drop</span>
          </label>
        </div>
      </div>
      <div className="mb-4">
        {photos.length > 0 && (
          <div className="flex flex-wrap gap-4">
            {photos.map((photo, index) => (
              <img
                key={index}
                src={URL.createObjectURL(photo)}
                alt={`Upload ${index + 1}`}
                className="w-24 h-24 object-cover rounded-md"
              />
            ))}
          </div>
        )}
      </div>
      <div className="mb-4">
        <input
          type="checkbox"
          id="certify"
          className="mr-2"
          checked={isCertified}
          onChange={(e) => setIsCertified(e.target.checked)}
        />
        <label htmlFor="certify" className="text-sm">
          I certify that this review is based on my own experience and is my genuine opinion of this hotel, and that I have no personal or business relationship with this establishment, and have not been offered any incentive or payment originating from the establishment to write this review. I understand that Tripadvisor has a zero-tolerance policy on fake reviews.
        </label>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-blue-500 text-white p-2 rounded-full"
          onClick={handleContinue}
        >
          Continue
        </button>
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
      <div className="w-full max-w-4xl mx-auto">
        <RatingComponent />
      </div>
    </div>
  );
};

export default ContactUsPage;
