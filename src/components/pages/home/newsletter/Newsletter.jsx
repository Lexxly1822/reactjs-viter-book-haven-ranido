import React from "react";

const Newsletter = () => {
  return (
    <>
      {/* Newsletter */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Stay updated with new releases, exclusive offers, and book
            recommendations.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-l-lg focus:outline-none text-gray-900"
            />
            <button className="px-6 py-3 bg-indigo-800 rounded-r-lg hover:bg-indigo-900 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
