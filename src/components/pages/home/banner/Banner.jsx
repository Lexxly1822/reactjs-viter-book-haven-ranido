import React from "react";
import { FaStar } from "react-icons/fa";

const Banner = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="py-16 md:py-24 bg-gradient-to-r from-indigo-50 to-purple-50"
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Discover Your Next Favorite Book
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Explore our vast collection of books across all genres. Find your
              next adventure today!
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300 shadow-lg">
                Browse Collection
              </button>
              <button className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition duration-300">
                Join Our Club
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <img
                src="/images/banner.webp"
                alt="Book collection"
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center">
                  <div className="bg-indigo-100 p-3 rounded-full mr-3">
                    <FaStar className="text-yellow-400 text-xl" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">4.9/5</p>
                    <p className="text-sm text-gray-600">Customer Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
