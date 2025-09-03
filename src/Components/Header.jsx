import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import reactLogo from '../assets/react.svg';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="h-20 w-full bg-gradient-to-r from-sky-600 via-blue-600 to-blue-800 shadow-lg top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between h-full">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={reactLogo} alt="React" className="h-10 w-10" />
          <Link
            to="/"
            className="text-2xl sm:text-2xl md:text-3xl font-bold text-white tracking-wide hover:text-yellow-300 transition duration-300"
          >
            BlogVsn
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-white font-medium">
          <Link
            to="/"
            className="hover:text-sky-200 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="hover:text-sky-200 transition duration-300"
          >
            Contact
          </Link>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/login"
              className="bg-white text-blue-600 px-4 py-2 rounded-xl shadow-md hover:text-blue-800 transition duration-300"
            >
              Login / Sign Up
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <line x1="6" y1="6" x2="18" y2="18" strokeWidth="2" strokeLinecap="round" />
                <line x1="6" y1="18" x2="18" y2="6" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <line x1="4" y1="6" x2="20" y2="6" strokeWidth="2" strokeLinecap="round" />
                <line x1="4" y1="12" x2="20" y2="12" strokeWidth="2" strokeLinecap="round" />
                <line x1="4" y1="18" x2="20" y2="18" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-20 left-0 w-full bg-gradient-to-b from-sky-600 via-blue-600 to-blue-800 bg-opacity-95 backdrop-blur-md shadow-lg"
            >
              <div className="flex flex-col px-6 py-4 space-y-3 text-white font-medium">
                <Link onClick={closeMenu} to="/" className="hover:text-yellow-300 hover:font-semibold transition">
                  Home
                </Link>
                <Link onClick={closeMenu} to="/contact" className="hover:text-yellow-300 hover:font-semibold transition">
                  Contact
                </Link>
                <Link onClick={closeMenu} to="/login" className="hover:text-yellow-300 hover:font-semibold transition">
                  Login / Sign Up
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default Header;
