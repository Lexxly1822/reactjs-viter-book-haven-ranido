import React from "react";
import CardCategories from "../partial/CardCategories";

const Categories = () => {
  return (
    <>
      {/* Categories */}
      <section id="categories" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Browse Categories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find books in your favorite genres
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <CardCategories
              title={" Fiction"}
              books={"1,240 Books "}
              textColor={"text-indigo-600 "}
              bgColor={"bg-indigo-100 "}
              Icon={
                " M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              }
            />
            <CardCategories
              title={" Science"}
              books={"856 Books "}
              textColor={"text-purple-600"}
              bgColor={"bg-purple-100 "}
              Icon={
                " M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              }
            />
            <CardCategories
              title={" Fantasy"}
              books={"932 Books "}
              textColor={"text-blue-600"}
              bgColor={"bg-blue-100 "}
              Icon={
                " M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              }
            />
            <CardCategories
              title={" Business"}
              books={"1,025 Books "}
              textColor={"text-pink-600 "}
              bgColor={"bg-pink-100 "}
              Icon={
                " M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
