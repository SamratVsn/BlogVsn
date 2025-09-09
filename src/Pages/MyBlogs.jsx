import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from '../Components/Header'

function MyBlogs() {
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
    </>
  );
}

export default MyBlogs;
