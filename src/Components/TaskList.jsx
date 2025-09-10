import { React, useState } from 'react';
import { FiEdit2, FiTrash2, FiSave } from 'react-icons/fi';

export default function TaskList({ tasks, onChangeTask, onDeleteTask}) {
  return (
    <ul className="flex flex-col gap-4 mt-6 max-w-md mx-auto">
      {tasks.map(task => (
        <li key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
}

function Task({task, onChange, onDelete}) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if(isEditing){
    taskContent = (<>
    <input value={task.text} onChange={ e => {
        onChange({...task, text:e.target.value});
    }} className="bg-gray-800 text-white px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400 w-full" />
    <button onClick={() => setIsEditing(false)} className="ml-2 text-cyan-400 hover:text-cyan-500 transition">Save</button>
    </>);
  }
  else{
    taskContent = (<>
    <span className={`${task.done ? 'line-through text-gray-400' : ''}`}>{task.text}</span>
    <button className="ml-2 text-yellow-400 hover:text-yellow-500 transition" onClick={() => setIsEditing(true)}><FiEdit2 size={20} /></button>
    </>);
  }
  return(
    <>
    <label className="flex items-center justify-between p-3 bg-gray-900 rounded-lg shadow-md">
      <div className="flex items-center gap-3">
      <input type="checkbox" checked = {task.done} onChange={ e => {
        onChange({...task, done:e.target.checked});
      }}  className="w-5 h-5 text-cyan-400 rounded focus:ring-2 focus:ring-cyan-400 transition" />
      {taskContent}
      </div>
      <button className="text-red-500 hover:text-red-600 transition" onClick={() => onDelete(task.id)}><FiTrash2 size={20} /></button>
    </label>
    </>
  );
}