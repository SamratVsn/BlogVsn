import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-sky-200 to-blue-300 text-center px-6">
      <h1 className="text-6xl font-extrabold text-blue-700 mb-6">404</h1>
      <p className="text-lg md:text-xl text-gray-700 mb-8">
        A Vsn Explorer should not get lost. <br />
        Click the button to go back.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg transition"
      >
        Go Home
      </Link>
    </div>
  );
}
