import React, { useState, useEffect, useReducer } from "react";
import { motion } from "framer-motion";
import Header from '../Components/Header';
import AddTask from '../Components/AddTask';
import TaskList from '../Components/TaskList';
import { FaLinkedin, FaGithub } from "react-icons/fa";

function MyBlogs() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  const [showAds, setShowAds] = useState(false);

  function handleAddTask(text){
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task){
    dispatch({
      type: 'changed',
      task: task
    });
  }

  function handleDeleteTask(taskId){
    dispatch({
      type: 'deleted',
      id: taskId
    });
  }

  useEffect(() => {
    let timer;
    if (!showAds) {
      timer = setTimeout(() => setShowAds(true), 13000);
    }
    return () => clearTimeout(timer);
  }, [showAds]);

  return (
    <>
      <Header />
      <div className="pt-16 flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 drop-shadow-lg mb-8 text-center">Add Your Tasks & Get tTings Done</h1>
        <div className="w-full max-w-md"><AddTask onAddTask={handleAddTask} /></div>
        <div className="w-full max-w-md mt-8"><TaskList tasks = {tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} /></div>
      </div>
      {showAds && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative text-white bg-gradient-to-br from-indigo-500 via-yellow-300 to-blue-600 rounded-2xl shadow-2xl w-11/12 max-w-md p-8">  
            <button onClick={() => setShowAds(false)} className="absolute top-3 right-3 cursor-pointer text-white hover:text-gray-200 text-2xl">
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

function taskReducer(tasks, action){
  switch(action.type){
    case 'added':{
      return [...tasks, {
        id:action.id,
        text:action.text,
        done:false
      }];
    }
    case 'changed':{
      return tasks.map(t => {
        if(t.id === action.task.id){
          return action.task;
        }
        else{
          return t;
        }
      });
    }

    case 'deleted':{
      return tasks.filter(t => t.id !== action.id);
    }
    default:{
      throw Error('Unknown action' + action.type);
    }
  }
}

let nextId = 3;
const initialTasks = [
  {id: 1, text: "The first Vsn Task gotta be spiritual", done:false},
  {id:3, text: "Read the npm docs", done:true},
  {id:2, text:"Visit my portfolio from Contact Page", done:false}
]