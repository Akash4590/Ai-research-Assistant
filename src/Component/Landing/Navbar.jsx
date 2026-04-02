import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom'; // <-- Added for routing
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'Features', to: 'features' },
    { name: 'Demo', to: 'demo' },
    { name: 'Pricing', to: 'pricing' },
    { name: 'Testimonials', to: 'testimonials' },
    { name: 'FAQs', to: 'faqs' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600 cursor-pointer">
          Mindscribe
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <ScrollLink
              key={index}
              to={item.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="relative text-gray-800 font-medium cursor-pointer transition hover:text-indigo-600"
              activeClass="active-nav"
            >
              {item.name}
            </ScrollLink>
          ))}
        </div>

        {/* Auth Buttons for Desktop */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link to="/auth/login">
            <button className="px-4 py-2 text-indigo-600 border border-indigo-600 rounded hover:bg-indigo-50 transition">
              Login
            </button>
          </Link>
          <Link to="/auth/register">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          <Menu className="text-indigo-600 cursor-pointer w-6 h-6" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-0 right-0 bg-white w-full p-4 z-50 shadow-lg">
          <div className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <ScrollLink
                key={index}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-gray-800 font-medium cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </ScrollLink>
            ))}

            {/* Auth Buttons inside Mobile Menu */}
            <div className="flex flex-col space-y-4 mt-4">
              <Link to="/auth/login">
                <button className="px-4 py-2 text-indigo-600 border border-indigo-600 rounded hover:bg-indigo-50 transition">
                  Login
                </button>
              </Link>
              <Link to="/auth/register">
                <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
