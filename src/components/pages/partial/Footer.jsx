import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">BookHaven</h3>
              <p className="mb-4">
                Your destination for great books and reading experiences.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <FaFacebook className="text-xl" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <FaTwitter className="text-xl" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <FaInstagram className="text-xl" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Shop</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition duration-300"
                  >
                    All Books
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition duration-300"
                  >
                    New Releases
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition duration-300"
                  >
                    Bestsellers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition duration-300"
                  >
                    Deals
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">About</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition duration-300"
                  >
                    Our Story
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition duration-300"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition duration-300"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition duration-300"
                  >
                    Events
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Help</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition duration-300"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition duration-300"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition duration-300"
                  >
                    Shipping
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition duration-300"
                  >
                    Returns
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>
              &copy; {new Date().getFullYear()} BookHaven. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer
