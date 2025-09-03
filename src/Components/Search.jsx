import { IoSearchOutline } from "react-icons/io5";
import Banner from '../assets/Banner.jpg'
import { useState } from "react";

export default function Search() {
  const tags = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "GoogleAPI",
    },
    {
      id: 3,
      name: "Created Here"
    },
  ]
  const [active, setActive] = useState(0)
  return (
    <div className="flex flex-col items-center justify-center mt-10 px-4">
      <img src={Banner} alt="Banner" className="cursor-pointer rounded-3xl shadow-lg w-full max-w-3xl h-auto max-h-48 object-cover mb-6" />

      <div className="w-full max-w-md relative">
        <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl pointer-events-none" />
        <input type="text" name="search" id="search" placeholder="Search..." className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent shadow-sm transition placeholder-slate-400" />
      </div>
      <div className="flex gap-4 justify-center mt-5 flex-wrap">
        {tags.map((item, index) => (
          <div key={index} onClick={() => setActive(index)} className={`cursor-pointer px-4 py-2 rounded-full border transition-all ${index === active ? "bg-blue-500 text-white border-blue-700" : "bg-white text-slate-800 border-slate-300 hover:bg-sky-100"}`}>
            {item.name}
          </div>
        ))}
      </div>

    </div>
  )
}
