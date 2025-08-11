import { useState } from 'react';
import { Link } from 'react-router-dom';

// Logo component with brain icon + BrainCare text
const Logo = () => (
  <div className="flex items-center space-x-3">
    {/* Brain SVG Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      className="h-10 w-10 fill-yellow-300"
    >
      <path d="M32 2C18.745 2 8 12.745 8 26c0 8.837 7.163 16 16 16h.5c1.933 0 3.5 1.567 3.5 3.5v2.25c0 2.485 2.015 4.5 4.5 4.5s4.5-2.015 4.5-4.5v-1.25c0-1.105.895-2 2-2H48c8.837 0 16-7.163 16-16S49.255 2 36 2H32z"/>
    </svg>

    {/* Brand Name */}
    <div className="text-2xl font-bold text-white tracking-wide">
      BrainCare
    </div>
  </div>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleLinkClick = () => setIsMenuOpen(false);

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/services', label: 'SERVICES' },
    { path: '/about', label: 'ABOUT US' },
    { path: '/dashboard', label: 'DASHBOARD' },
    { path: '/virtual-care', label: 'VIRTUAL-CARE' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex justify-between items-center 
      bg-gradient-to-r from-purple-800 via-indigo-700 to-purple-900 text-white shadow-lg backdrop-blur-md">
      
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2">
        <Logo />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8 items-center font-medium">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="hover:text-yellow-300 hover:scale-105 transition-all duration-300"
          >
            {link.label}
          </Link>
        ))}
        <Link
          to="/login"
          className="bg-yellow-400 text-black px-5 py-2 rounded-md font-semibold shadow hover:bg-yellow-300 transition duration-300"
        >
          LOGIN
        </Link>
      </div>

      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300"
        aria-label="Toggle mobile menu"
        aria-expanded={isMenuOpen}
      >
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Overlay + Menu */}
      {isMenuOpen && (
        <>
          {/* Background Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity"
            onClick={toggleMenu}
          />

          {/* Mobile Menu */}
          <div className="absolute top-16 left-0 right-0 bg-gradient-to-br from-purple-800 to-indigo-700 text-white 
              shadow-lg rounded-b-lg z-50 md:hidden animate-slide-down transition duration-300">
            <div className="flex flex-col px-6 py-5 gap-5 font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={handleLinkClick}
                  className="hover:text-yellow-300 transition duration-300"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/login"
                onClick={handleLinkClick}
                className="bg-yellow-400 text-black px-6 py-2 rounded-md text-center font-semibold hover:bg-yellow-300 transition duration-300"
              >
                LOGIN
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
