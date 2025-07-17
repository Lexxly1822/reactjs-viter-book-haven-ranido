import React from "react";

const CardCategories = ({Icon,title,books,textColor,bgColor,}) => {
  return (
    <>
      <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition duration-300">
        <div className={`${bgColor} w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4`}>
          <svg
            className={`w-8 h-8 ${textColor}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={Icon}
            ></path>
          </svg>
        </div>
        <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{books}</p>
      </div>
    </>
  );
};

export default CardCategories;
