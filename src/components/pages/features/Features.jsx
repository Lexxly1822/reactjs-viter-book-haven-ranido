import React from "react";
import { FaStar } from "react-icons/fa";
import CardFeatures from "../partial/CardFeatures";

const Features = () => {
  return (
    <>
      {/* Featured Books */}
      <section id="featured" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Featured Books
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our handpicked selection of must-read titles
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <CardFeatures
              img={"/images/F1.webp"}
              title={" The Silent Patient"}
              author={"Alex Michaelides "}
              rating={" 4.2 "}
              star={"text-gray-400"}
              price={"$12.99 "}
            />
            <CardFeatures
              img={"/images/F2.webp"}
              title={"Atomic Habits"}
              author={"James Clear"}
              rating={" (4.9) "}
              star={"text-yellow-400"}
              price={"$12.99$14.99 "}
            />
            <CardFeatures
              img={"/images/F3.webp"}
              title={" Educated"}
              author={"Tara Westover "}
              rating={" (4.8) "}
              star={"text-yellow-400"}
              price={"$13.49 "}
            />
            <CardFeatures
              img={" /images/F4.webp"}
              title={" Where the Crawdads Sing"}
              author={"Delia Owens "}
              rating={" (4.5) "}
              star={"text-gray-400"}
              price={"$11.99 "}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
