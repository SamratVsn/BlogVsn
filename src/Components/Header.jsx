import React, { useState } from 'react'
import react from '../assets/react.svg'

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  return (
    <div className="h-20 px-6 bg-gradient-to-r from-sky-500 via-blue-500 to-blue-700 shadow-md">
      <div className="flex items-center justify-between h-full">

        <div className="flex items-center gap-3 md:gap-2 ml-10">
          <img src={react} alt="React" className="h-[40px] md:h-[40px]" />
          <span className="text-2xl md:text-xl font-bold text-white tracking-wide hover:text-yellow-200 transition duration-200 cursor-pointer">BlogVsn</span>
        </div>

        {/* Desktop view */}
        <ul className="hidden md:flex md:justify-center items-center gap-8 text-white font-medium mr-30">
          <li className="hover:text-sky-200 transition duration-200 cursor-pointer">Home</li>
          <li className="hover:text-sky-200 transition duration-200 cursor-pointer">Contact</li>
          <li className="bg-white text-blue-500 px-4 py-2 rounded-xl shadow hover:text-blue-700 transition duration-200 cursor-pointer">
            Login / Sign Up
          </li>
        </ul>

        {/* Mobile View */}
        <div className='md:hidden'>
          <button onClick={toggleMenu} className="text-slate-200" aria-label="Toogle menu">{isOpen ? (
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
          )}</button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-gradient-to-b from-sky-500 via-blue-500 to-blue-700 bg-opacity-90 backdrop-blur-md shadow-xl w-full absolute top-[80px] left-0 z-50">
            <ul className="flex flex-col px-6 py-4 space-y-3 text-base font-medium list-none">
              <li onClick={closeMenu} className="text-white hover:text-yellow-200 transition cursor-pointer">Home</li>
              <li onClick={closeMenu} className="text-white hover:text-yellow-200 transition cursor-pointer">Contact</li>
              <li onClick={closeMenu} className="text-white hover:text-yellow-200 transition cursor-pointer">Login / Sign Up</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
