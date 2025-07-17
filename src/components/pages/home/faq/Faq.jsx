import React from "react";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

const Faq = () => {
  const [activeAccordion, setActiveAccordion] = React.useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };
  console.log(activeAccordion);

  return (
    <>
      {/* FAQ */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Frequently Asked Question
            </h2>
          </div>
          <p className="text-gray max-w-2xl mx-auto text-center">
            Find Answer to common question
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          
          {/* 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
            <button
              onClick={() => toggleAccordion(0)}
              className="w-full flex justify-between items-center p-6 text-left"
            >
              <h3 className="font-bold text-gray-900">
                How long does shopping take?
              </h3>

              {activeAccordion === 0 ? (
                <FaChevronUp className=" text-indigo-600" />
              ) : (
                <FaChevronDown className="text-indigo-600" />
              )}
            </button>
            {activeAccordion === 0 && (
              <div className="px-6 pb-6 text-gray-600">
                <p>
                  Standard shipping typically takes 3-5 business day within the
                  contimental US.{" "}
                </p>
              </div>
            )}
          </div>
            {/* 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
            <button
              onClick={() => toggleAccordion(1)}
              className="w-full flex justify-between items-center p-6 text-left"
            >
              <h3 className="font-bold text-gray-900">
                Do you offer international shipping?
              </h3>

              {activeAccordion === 1 ? (
                <FaChevronUp className=" text-indigo-600" />
              ) : (
                <FaChevronDown className="text-indigo-600" />
              )}
            </button>
            {activeAccordion === 1 && (
              <div className="px-6 pb-6 text-gray-600">
                <p>
                  Yes, we ship to most countries worldwide. International
                  shipping rates and delivery times vary by destination and will
                  be calculated at checkout.{" "}
                </p>
              </div>
            )}
          </div>
            {/* 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
            <button
              onClick={() => toggleAccordion(2)}
              className="w-full flex justify-between items-center p-6 text-left"
            >
              <h3 className="font-bold text-gray-900">
                What is your return policy?
              </h3>

              {activeAccordion === 2 ? (
                <FaChevronUp className=" text-indigo-600" />
              ) : (
                <FaChevronDown className="text-indigo-600" />
              )}
            </button>
            {activeAccordion === 2 && (
              <div className="px-6 pb-6 text-gray-600">
                <p>
                  We accept returns within 30 days of purchase for a full
                  refund. Books must be in new, unread condition with original
                  packaging. Please contact our customer service to initiate a
                  return.{" "}
                </p>
              </div>
            )}
          </div>
            {/* 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
            <button
              onClick={() => toggleAccordion(3)}
              className="w-full flex justify-between items-center p-6 text-left"
            >
              <h3 className="font-bold text-gray-900">
                How do I join the book club?
              </h3>

              {activeAccordion === 3 ? (
                <FaChevronUp className=" text-indigo-600" />
              ) : (
                <FaChevronDown className="text-indigo-600" />
              )}
            </button>
            {activeAccordion === 3 && (
              <div className="px-6 pb-6 text-gray-600">
                <p>
                  You can join our book club by signing up on our website.
                  Membership is free and gives you access to monthly book picks,
                  exclusive discounts, and member-only events.{" "}
                </p>
              </div>
            )}
          </div>

        </div>
      </section>
    </>
  );
};

export default Faq;
