import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../Components/Header';
import Search from '../Components/Search';
import IntroPost from '../Components/IntroPost'
import Portfolio from '../assets/Portfolio.png'

function Home() {
  const [loading, setLoading] = useState(true);
  const [showAds, setShowAds] = useState(false);

  useEffect(() => {
    let timer;
    if (!showAds) {
      timer = setTimeout(() => setShowAds(true), 9000);
    }
    return () => clearTimeout(timer);
  }, [showAds]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
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
              className="flex flex-col">
              <Header />

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
                <Search />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-6">
                <IntroPost />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {showAds && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative text-white bg-gradient-to-br from-indigo-500 via-yellow-300 to-blue-600 rounded-2xl shadow-2xl w-11/12 max-w-md p-6"
          >
            <button
              onClick={() => setShowAds(false)}
              className="absolute top-3 right-3 cursor-pointer text-white hover:text-gray-200 
                   text-2xl font-bold"
            >
              ✕
            </button>

            <h1 className="text-3xl font-extrabold mb-4 text-center drop-shadow-lg">
              Samrat Parajuli
            </h1>

            <img
              src={Portfolio}
              alt="Portfolio Preview"
              className="rounded-lg shadow-lg w-full h-48 object-cover mb-4"
            />

            <p className="mb-6 text-center text-white/90">
              Click below to visit my portfolio website
            </p>

            <div className="flex justify-center">
              <a
                href="https://samratvsn.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-white text-purple-700 font-semibold 
                     rounded-lg shadow-md hover:bg-gray-100 transition"
              >
                View Website
              </a>
            </div>

            <p className="mt-6 text-center text-sm text-white/70">🚀 Popup for my website</p>
          </motion.div>
        </div>
      )}
    </>
  );
}

export default Home;
