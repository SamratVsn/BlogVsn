import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../Components/Header';
import Search from '../Components/Search';
import Blogs from '../Components/Blogs';

function Home() {
  const [loading, setLoading] = useState(true);

  // Simulate page load (or you can tie this to API/data loading)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 1.2s loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-50 via-sky-100 to-sky-200">
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-tr from-blue-100 via-sky-200 to-sky-300 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Rotating circle */}
            <motion.div
              className="w-16 h-16 border-4 border-t-sky-500 border-b-sky-700 rounded-full mb-6"
              animate={{ rotate: 360, opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
            />

            {/* Staggered text: BLOG VSN */}
            <motion.div
              className="flex space-x-4 text-4xl sm:text-5xl md:text-6xl font-extrabold text-sky-700 mb-4"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.4,
                  },
                },
              }}
            >
              {["BLOG", "VSN"].map((word, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>

            {/* Loader subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-lg sm:text-xl font-semibold text-sky-600"
            >
              THE BLOG IS ON
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Search />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
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
