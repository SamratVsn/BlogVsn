import React from 'react';
import { motion } from 'framer-motion';
import Header from '../Components/Header';
import { div } from 'framer-motion/client';

export default function Contact() {
  return (
    <div>
      <Header />
      <div className="min-h-screen flex flex-col items-center bg-gradient-to-tr from-blue-50 via-sky-100 to-sky-200">
        <div className="flex flex-col items-center w-full px-4 py-8 sm:px-6 md:px-8">
          {/* Title */}
          <motion.section
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-3"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sky-800">
              Meet the Developer
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-sky-700">
              Samrat Parajuli
            </h2>
          </motion.section>

          {/* Content Card */}
          <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 w-full max-w-md sm:max-w-lg md:max-w-xl bg-white shadow-lg rounded-2xl p-6 sm:p-8 space-y-6"
          >
            {/* About */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-sky-600">About Me</h3>
              <p className="text-gray-700 mt-2 leading-relaxed text-sm sm:text-base">
                I’m a beginner-level developer skilled in C, JavaScript, React, and
                Tailwind CSS. I’m constantly learning, growing, and building
                meaningful digital experiences.
              </p>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-sky-600">Connect With Me</h3>
              <ul className="space-y-2 mt-2 text-gray-700 text-sm sm:text-base">
                <li>
                  <span className="font-medium">Personal Site:</span>{' '}
                  <a
                    href="https://samratvsn.vercel.app"
                    className="text-sky-500 hover:underline break-words"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    samratvsn.vercel.app
                  </a>
                </li>

                <li>
                  <span className="font-medium">Instagram:</span>{' '}
                  <a
                    href="https://www.instagram.com/samrat_vsn/"
                    className="text-sky-500 hover:underline break-words"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @samrat_vsn
                  </a>{' '}
                  — Sharing insights on development, personal growth, and daily inspiration.
                </li>

                <li>
                  <span className="font-medium">LinkedIn:</span>{' '}
                  <a
                    href="https://www.linkedin.com/in/samrat-parajuli-54310732b/"
                    className="text-sky-500 hover:underline break-words"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Samrat Parajuli
                  </a>{' '}
                  — My professional profile, showcasing projects, skills, and career growth in software development and web technologies.
                </li>

                <li>
                  <span className="font-medium">GitHub:</span>{' '}
                  <a
                    href="https://github.com/SamratVsn"
                    className="text-sky-500 hover:underline break-words"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SamratVsn
                  </a>{' '}
                  — Browse my coding projects, open-source contributions, and experiments in JavaScript, React, C, and other technologies.
                </li>

                <li>
                  <span className="font-medium">Google Developer:</span>{' '}
                  <a
                    href="https://g.dev/Samrat_vsn"
                    className="text-sky-500 hover:underline break-words"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Samrat_vsn
                  </a>{' '}
                  — My Google Developer profile, highlighting apps, APIs, and technical achievements in the Google ecosystem.
                </li>
              </ul>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-sky-600">Let's Chat</h3>
              <p className="text-gray-700 mt-2 text-sm sm:text-base">
                Feel free to reach out via the contact form below or connect with me
                on Instagram or my personal blog. I'd love to hear your feedback or
                collaborate on exciting web projects!
              </p>

              <form className="mt-4 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 p-2"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 p-2"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 p-2"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-2 px-4 bg-sky-600 text-white rounded-md hover:bg-sky-700 focus:outline-none"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
