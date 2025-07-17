import React from 'react'
import { FaStar } from 'react-icons/fa'

const CardTestimonials = ({star,description,img,readers,member}) => {
  return (
    <>
                {/* 1 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center mr-4">
                      <FaStar className="text-yellow-400" />
                      <FaStar className="text-yellow-400" />
                      <FaStar className="text-yellow-400" />
                      <FaStar className="text-yellow-400" />
                      <FaStar className={star} />
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    {description}
                  </p>
                  <div className="flex items-center">
                    <img
                      src={img}
                      alt="Customer"
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{readers}</h4>
                      <p className="text-sm text-gray-600">{member}</p>
                    </div>
                  </div>
                </div>
      
    </>
  )
}

export default CardTestimonials
