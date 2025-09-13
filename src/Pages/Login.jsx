import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");

  const handleNavigate = (path) => {
    setTimeout(() => {
      navigate(path);
    }, 2000);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0a26dd] via-[#061666] to-[#020b33] px-4">
      <div className="w-full max-w-md bg-[#020b33]/80 backdrop-blur-lg rounded-2xl border border-cyan-500/30 shadow-xl p-8 flex flex-col items-center text-white">

        {/* Google Login or User Section */}
        <div className="w-full flex flex-col items-center mb-8">
          {user ? (
            <>
              <div className="max-w-md mx-auto bg-slate-800 rounded-lg shadow-md p-4 sm:p-6 md:p-8 lg:p-10">
                <h1 className="text-2xl font-bold text-blue-400 mb-4 text-center">
                  Welcome Back!
                </h1>

                <div className="text-center mb-6">
                  <p className="text-slate-300 mb-2">Hello, {user.name}</p>
                  <p className="text-sm text-slate-400">
                    Ready to continue where you left off?
                  </p>
                </div>

                <button
                  onClick={() => {
                    googleLogout();
                    localStorage.removeItem("user");
                    setUser(null);
                    setStatusMessage("Logged out successfully!");
                    handleNavigate("/");
                  }}
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="max-w-md mx-auto bg-slate-800 rounded-lg shadow-md p-4 sm:p-6 md:p-8 lg:p-10">
                <h1 className="text-2xl font-bold text-blue-400 mb-4 text-center">
                  Hello User!
                </h1>

                <div className="text-center mb-6">
                  <p className="text-slate-300 mb-2">Welcome to BlogVsn by Samrat</p>
                  <p className="text-sm text-slate-400">
                    Sign in with your Google account to continue
                  </p>
                </div>

                <div className="flex justify-center">
                  <GoogleLogin
                    onSuccess={(credentialResponse) => {
                      const decoded = jwtDecode(credentialResponse.credential);
                      localStorage.setItem("user", JSON.stringify(decoded));
                      setUser(decoded);
                      setStatusMessage("Login successful! Redirecting...");
                      handleNavigate("/");
                    }}
                    onError={() => console.log("Login Failed")}
                    shape="pill"
                    theme="filled_blue"
                    size="large"
                    width="280"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        <div className="w-full max-w-sm sm:max-w-md mx-auto px-4 sm:px-0">
          {/* Simple divider */}
          <div className="flex items-center w-full mb-4 sm:mb-6">
            <div className="flex-grow border-t border-slate-600"></div>
            <span className="mx-2 sm:mx-3 text-slate-400 text-xs sm:text-sm">or</span>
            <div className="flex-grow border-t border-slate-600"></div>
          </div>

          {/* Back Button */}
          <Link
            to="/"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-md transition-colors duration-200 text-center block text-sm sm:text-base"
          >
            Back to Home
          </Link>

          {/* Status Message */}
          {statusMessage && (
            <p className="mt-3 sm:mt-4 text-green-400 text-center text-sm sm:text-base px-2">
              {statusMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}