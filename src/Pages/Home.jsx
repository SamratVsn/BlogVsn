import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../Components/Header';
import Search from '../Components/Search';
import Blogs from '../Components/Blogs';

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#0f172a] via-[#1e3a8a] to-[#0f172a] text-white">
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-tr from-[#0f172a] via-[#1e3a8a] to-[#0f172a] z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Neon Rotating Loader */}
            <motion.div
              className="w-16 h-16 border-4 border-t-cyan-400 border-b-sky-600 rounded-full mb-6 shadow-[0_0_20px_#22d3ee]"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
            />

            {/* Futuristic Text */}
            <motion.div
              className="flex space-x-4 text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-200 bg-clip-text text-transparent drop-shadow-lg mb-4"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.3 } },
              }}
            >
              {["BLOG", "VSN"].map((word, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.8, ease: 'easeOut' },
                    },
                  }}
                  className="tracking-wider"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-lg sm:text-xl font-semibold text-cyan-300 tracking-wide drop-shadow-md"
            >
              ⚡ THE BLOG IS ON ⚡
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <Header />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8"
            >
              <Search />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-6"
            >
              <Blogs />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Home;
