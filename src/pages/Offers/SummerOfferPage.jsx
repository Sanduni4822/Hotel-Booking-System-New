import React from 'react';

const SummerOfferPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
    
      {/* Image Section */}
      <div className="w-full max-w-4xl">
        <div className="relative">
          <img
            className="w-full h-64 object-cover rounded-lg shadow-lg"
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fGJlYWNofGVufDB8fHx8MTYyNzA0MDg0Nw&ixlib=rb-1.2.1&q=80&w=1080"
            alt="Summer Getaway"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold">SUMMER OFFER</h2>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="mt-8 w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Summer Offer in October</h2> 
        <p className="mb-4">
          Enjoy a 20% Off on accommodation when you stay at Villa The Leaf.
          Book your summer vacation in Sri Lanka today for some fun in the sun with our Summer Island Getaway special offer.
        </p>

        {/* Inclusions */}
        <h3 className="text-xl font-bold mb-2">Inclusions</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>20% Off on the best available rate</li>
        </ul>

        {/* Booking and Stay Period */}
        <div className="border-t pt-4">
          <p className="mb-2"><span className="font-bold italic">Booking Period:</span> Now – 31st October 2024</p>
          <p className="mb-2"><span className="font-bold italic">Stay Period:</span> Now – 31st October 2024</p>
          <p className="mb-2"><span className="font-bold italic">promo code-</span> PCID 101 </p>
        </div>

        {/* Book Now Button */}
        <div className="mt-6">
          <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 transition">
            ADD NOW 
          </button>
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="mt-8 w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-2">Terms and Conditions</h3>
      <br />
        <h4 className="text-xl font-semibold italic underline mb-4">Booking Conditions</h4>
        <ul className="list-disc pl-5">
          <li>Applicable for bookings placed before <span className="font-bold">31st October 2024</span>.</li>
          <li>This offer is booked on the USD rate.</li>
          <li>Reservations will be confirmed on availability, on a first-come-first-serve basis.</li>
          <li>The rates/ discounts are subject to seasonal variations and may change without notice.</li>
        </ul>
        <br />

        <h4 className="text-xl font-semibold italic underline mb-4">Stay Conditions</h4>
        <ul className="list-disc pl-5">
          <li>Applicable for stays until <span className="font-bold">31st October 2024</span>.</li>
          <li>Offer will not be valid if referred to at the time of check-in or checkout.</li>
        </ul>
        <br />

        <h4 className="text-xl font-semibold italic underline mb-4">Amendments and Cancellations</h4>
        <ul className="list-disc pl-5">
          <li>Amendments of date of stay in a period outside the offer period, due to reasonable circumstance, will be at the sole discretion of the Management.</li>
          <li>Please note that the offer is not applicable for,</li>
          <ol className="list-decimal pl-5">
            <li>Extras consumed at the resort</li>
            <li>Gift vouchers</li>
            <li>Reservations made through any other platform</li>
            <li>To be combined with other offers</li>
          </ol>
          <li>The offer cannot be combined with other offers nor extended.</li>
          <li>Offer Discounts are subject to change without prior notice.</li>
        </ul>
        <br />
      </div>
    </div>
  );
};

export default SummerOfferPage;
