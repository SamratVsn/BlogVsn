import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from '../Components/Header'
import { FaLinkedin, FaGithub } from "react-icons/fa";

function MyBlogs() {
  const [showAds, setShowAds] = useState(false);

  useEffect(() => {
    let timer;
    if (!showAds) {
      timer = setTimeout(() => setShowAds(true), 6000);
    }
    return () => clearTimeout(timer);
  }, [showAds]);

  return (
    <>
      <Header />
      <div className="pt-10 flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white text-center px-4">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          🚧 Work in Progress 🚧
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-lg md:text-xl mb-8 text-gray-300 max-w-xl"
        >
          This section is under construction. I’m still yet to finish this so stay tuned
        </motion.p>

        <Link
          to="/"
          className="px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold shadow-lg transition duration-300"
        >
          ⬅ Back to Home
        </Link>
      </div>
      {showAds && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative text-white bg-gradient-to-br from-indigo-500 via-yellow-300 to-blue-600 rounded-2xl shadow-2xl w-11/12 max-w-md p-8"
          >
            
            <button
              onClick={() => setShowAds(false)}
              className="absolute top-3 right-3 cursor-pointer text-white hover:text-gray-200 text-2xl"
            >
              X
            </button>

            {/* Title */}
            <h1 className="text-2xl font-extrabold mb-3 text-center drop-shadow-lg">
              🚀 Connect with Me Online
            </h1>

            {/* Subtitle */}
            <p className="mb-6 text-center text-white/90">
              Let’s grow & build amazing things together 🌟
            </p>

            {/* Socials */}
            <div className="flex justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/samrat-parajuli-54310732b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white text-indigo-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
              >
                <FaLinkedin className="text-xl" /> LinkedIn
              </a>
              <a
                href="https://github.com/SamratVsn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
              >
                <FaGithub className="text-xl" /> GitHub
              </a>
            </div>

            <p className="mt-6 text-center text-sm text-white/80">
              ✨ Follow me for updates & projects
            </p>
          </motion.div>
        </div>
      )}
    </>
  );
}

export default MyBlogs;
