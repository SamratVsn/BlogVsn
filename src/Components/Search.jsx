import { IoSearchOutline } from "react-icons/io5";
import Banner from '../assets/Banner.jpg';
import { useState } from "react";

export default function Search() {
  const tags = [
    { id: 1, name: "All" },
    { id: 2, name: "GoogleAPI" },
    { id: 3, name: "Created Here" },
];

  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center mt-10 px-4">
      
      <div className="relative w-full max-w-4xl mb-8 z-0">
        <img
          src={Banner}
          alt="Banner"
          className="cursor-pointer rounded-3xl shadow-lg w-full h-48 object-cover brightness-90 hover:brightness-100 transition duration-500"
        />
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#0f172a]/40 via-[#1e3a8a]/40 to-[#0f172a]/40 hover:from-cyan-400/10 hover:via-sky-500/10 hover:to-cyan-400/10 transition"></div>
      </div>

      {/* Search Bar */}
      <div className="w-full max-w-xl relative">
        <IoSearchOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400 text-2xl pointer-events-none animate-pulse" />
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          className="w-full pl-12 pr-4 py-3 rounded-2xl bg-[#0f172a]/70 border border-cyan-400/30 text-white placeholder-slate-400 shadow-md backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition"
        />
      </div>

      {/* Tags */}
      <div className="flex gap-4 justify-center mt-6 flex-wrap">
        {tags.map((item, index) => (
          <div
            key={index}
            onClick={() => setActive(index)}
            className={`cursor-pointer px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all shadow-md ${index === active
                ? "bg-gradient-to-r from-cyan-400 to-sky-500 text-slate-900 font-semibold shadow-cyan-400/40 hover:shadow-cyan-400/70"
                : "bg-[#0f172a]/70 text-slate-200 border border-cyan-400/30 hover:bg-cyan-400/20"
              }`}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
