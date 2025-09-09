import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import reactLogo from '../assets/react.svg';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <header className="relative z-50 h-20 w-full bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#0f172a] shadow-lg backdrop-blur-xl border-b border-blue-500/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between h-full">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <motion.img
            src={reactLogo}
            alt="React"
            className="h-10 w-10"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 1 }}
          />
          <Link
            to="/"
            className="text-2xl sm:text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300 tracking-wider drop-shadow-md hover:drop-shadow-lg transition"
          >
            BlogVsn
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          {['Home', 'MyBlogs', 'Contact'].map((item, idx) => {
            const paths = {
              Home: "/",
              MyBlogs: "/myblogs",
              Contact: "/contact"
            };

            return (
              <Link
                key={idx}
                to={paths[item]}
                className="relative text-sky-100 hover:text-cyan-300 transition group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all group-hover:w-full"></span>
              </Link>
            );
          })}

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            {user ? (
              <Link to="/login" className="bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold px-5 py-2 rounded-2xl shadow-lg hover:shadow-red-500/50 transition" >
                Logout
              </Link>
            ) : (
              <Link to="/login" className="bg-gradient-to-r from-cyan-400 to-sky-500 text-slate-900 font-semibold px-5 py-2 rounded-2xl shadow-lg hover:shadow-cyan-400/50 transition">
                Login / Sign in
              </Link>
            )}
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-cyan-300 hover:text-white focus:outline-none transition"
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
              className="md:hidden absolute top-20 left-0 w-full z-50 bg-gradient-to-b from-[#0f172a]/100 via-[#1e3a8a]/100 to-[#0f172a]/100 backdrop-blur-3xl border-b border-cyan-500/30 shadow-lg"
            >
              <div className="flex flex-col px-6 py-4 space-y-4 text-cyan-100 font-medium">
                <Link onClick={closeMenu} to="/" className="hover:text-cyan-300 transition">
                  Home
                </Link>
                <Link onClick={closeMenu} to="/myblogs" className="hover:text-cyan-300 transition">
                  MyBlogs
                </Link>
                <Link onClick={closeMenu} to="/contact" className="hover:text-cyan-300 transition">
                  Contact
                </Link>
                {user ? (<Link onClick={closeMenu} to="/login" className="hover:text-cyan-300 transition">Logout</Link>) : (<Link onClick={closeMenu} to="/login" className="hover:text-cyan-300 transition">Login / Sign in</Link>)}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default Header;
