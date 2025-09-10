import React, { useState } from 'react';

function AddTask({ onAddTask }) {
  const [text, setText] = useState('');

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto mt-6">
      <input type="text" placeholder="Add a task..." value={text} onChange={(e) => setText(e.target.value)} className="flex-1 px-4 py-3 rounded-lg border border-gray-700 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"/>
      <button className="px-6 py-3 bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-semibold rounded-lg shadow-lg transition transform hover:-translate-y-1 active:translate-y-0" >
        Add
      </button>
    </div>
  );
}

export default AddTask;
