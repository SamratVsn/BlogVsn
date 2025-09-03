import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../Components/Header';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(
        'service_4caks7t',   
        'template_302eb9i',  
        formData,
        's_DOKVIFTrfiU-5Rj'       
      )
      .then(
        () => {
          setSending(false);
          setSent(true);
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => setSent(false), 5000); // Auto-hide success message
        },
        (err) => {
          setSending(false);
          alert('Oops! Something went wrong. Please try again.');
          console.error(err);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#0f172a] via-[#1e3a8a] to-[#0f172a] text-white">
      <Header />

      <div className="flex flex-col items-center w-full px-4 py-8 sm:px-6 md:px-8">
        {/* Title */}
        <motion.section
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-200 bg-clip-text text-transparent drop-shadow-lg">
            Meet the Developer
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-cyan-300">
            Samrat Parajuli
          </h2>
        </motion.section>

        {/* Content Card */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 w-full max-w-md sm:max-w-lg md:max-w-xl bg-[#1e293b] shadow-lg shadow-cyan-500/20 rounded-2xl p-6 sm:p-8 space-y-6"
        >
          {/* About */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-cyan-400">About Me</h3>
            <p className="text-gray-300 mt-2 leading-relaxed text-sm sm:text-base">
              I’m a beginner-level developer skilled in C, JavaScript, React, and Tailwind CSS.
              I’m constantly learning, growing, and building meaningful digital experiences.
            </p>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-cyan-400">Connect With Me</h3>
            <ul className="space-y-2 mt-2 text-gray-300 text-sm sm:text-base">
              <li>
                <span className="font-medium">Personal Site:</span>{' '}
                <a
                  href="https://samratvsn.vercel.app"
                  className="text-cyan-400 hover:underline break-words"
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
                  className="text-cyan-400 hover:underline break-words"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @samrat_vsn
                </a>{' '}
                — Sharing insights on development and daily inspiration.
              </li>
              <li>
                <span className="font-medium">LinkedIn:</span>{' '}
                <a
                  href="https://www.linkedin.com/in/samrat-parajuli-54310732b/"
                  className="text-cyan-400 hover:underline break-words"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Samrat Parajuli
                </a>{' '}
                — Professional profile showcasing projects and skills.
              </li>
              <li>
                <span className="font-medium">GitHub:</span>{' '}
                <a
                  href="https://github.com/SamratVsn"
                  className="text-cyan-400 hover:underline break-words"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SamratVsn
                </a>{' '}
                — Browse coding projects and open-source contributions.
              </li>
              <li>
                <span className="font-medium">Google Developer:</span>{' '}
                <a
                  href="https://g.dev/Samrat_vsn"
                  className="text-cyan-400 hover:underline break-words"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Samrat_vsn
                </a>{' '}
                — Google Developer profile highlighting apps and achievements.
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-cyan-400">Let's Chat</h3>
            <p className="text-gray-300 mt-2 text-sm sm:text-base">
              Reach out via the form below or connect on Instagram or my personal blog.
            </p>

            <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border-gray-600 bg-[#0f172a] rounded-md shadow-sm focus:ring-cyan-400 focus:border-cyan-400 p-2 text-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border-gray-600 bg-[#0f172a] rounded-md shadow-sm focus:ring-cyan-400 focus:border-cyan-400 p-2 text-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border-gray-600 bg-[#0f172a] rounded-md shadow-sm focus:ring-cyan-400 focus:border-cyan-400 p-2 text-white"
                />
              </div>

              {/* Animated Send Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px #22d3ee' }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-2 px-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-md focus:outline-none ${
                  sending ? 'opacity-70 cursor-not-allowed' : ''
                }`}
                disabled={sending}
              >
                {sending ? 'Sending...' : 'Send Message'}
              </motion.button>

              {/* Success message */}
              <AnimatePresence>
                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="text-green-400 text-center mt-2 font-medium"
                  >
                    ✅ Message sent successfully!
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
