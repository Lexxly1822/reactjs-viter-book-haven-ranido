import React from "react";
import { FaStar } from "react-icons/fa";
import CardTestimonials from "../../partial/CardTestimonials";

const Testimonials = () => {
  return (
    <>
      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              What Our Readers Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CardTestimonials
              star={"text-yellow-400 "}
              description={
                "The best selection of books I've found online. Fast shipping and great customer service! "
              }
              img={"/images/p1.webp "}
              readers={"Sarah Johnson "}
              member={"Book Club Member "}
            />
            <CardTestimonials
              star={"text-yellow-400 "}
              description={
                "I love the curated collections. Always find something interesting to read. "
              }
              img={"/images/p2.webp "}
              readers={"Michael Chen "}
              member={"Avid Reader "}
            />
            <CardTestimonials
              star={"text-gray-300"}
              description={
                "Great prices and frequent sales. My go-to place for new releases. "
              }
              img={"/images/p3.webp"}
              readers={"Emily Rodriguez "}
              member={"Loyal Customer "}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
