import React from "react";
import { FaBars, FaShoppingCart, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-indigo-700">
              BookHaven
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home "
              className="text-gray-800 hover:text-indigo-600 font-medium"
            >
              {" "}
              Home
            </a>
            <a
              href="#home "
              className="text-gray-800 hover:text-indigo-600 font-medium"
            >
              {" "}
              Featured
            </a>
            <a
              href="#home "
              className="text-gray-800 hover:text-indigo-600 font-medium"
            >
              {" "}
              Categories
            </a>
            <a
              href="#home "
              className="text-gray-800 hover:text-indigo-600 font-medium"
            >
              {" "}
              FAQ
            </a>
          </nav>
          {/* mobile */}
          <div className="flex items-center space-x-4">
            <button className="relative text-gray-700 hover:text-indigo-600 ">
              <FaShoppingCart className="text-xl" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 "
            >
              {isMenuOpen ? (
                <FaTimes className="text-xl" />
              ) : (
                <FaBars className="text-xl" />
              )}
            </button>
          </div>
        </div>

        {/* mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
              <a
                href="#home"
                className="py-2 text-gray-800 hover:text-indigo-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#featured"
                className="py-2 text-gray-800 hover:text-indigo-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Featured
              </a>
              <a
                href="#categories"
                className="py-2 text-gray-800 hover:text-indigo-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </a>
              <a
                href="#testimonials"
                className="py-2 text-gray-800 hover:text-indigo-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#faq"
                className="py-2 text-gray-800 hover:text-indigo-600"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
