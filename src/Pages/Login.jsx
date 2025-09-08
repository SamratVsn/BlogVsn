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
              <p className="text-3xl font-extrabold text-cyan-400 drop-shadow-lg mb-2 text-center">
                Welcome Back, {user.name}
              </p>
              <p className="text-slate-300 mb-6 text-center">
                Logout by pressing the button below
              </p>
              <button
                onClick={() => {
                  googleLogout();
                  localStorage.removeItem("user");
                  setUser(null);
                  setStatusMessage("✅ Logout successful! Redirecting...");
                  handleNavigate("/");
                }}
                className="px-6 py-3 w-full text-center text-lg font-semibold rounded-xl bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-md hover:shadow-red-500/50 transition"
              >
                🚪 Logout
              </button>
            </>
          ) : (
            <>
              <h1 className="text-4xl font-extrabold text-cyan-400 drop-shadow-lg mb-4">
                Hello User 👋
              </h1>
              <p className="text-slate-300 mb-10 text-center">
                Sign in with your Google account to continue
              </p>
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  const decoded = jwtDecode(credentialResponse.credential);
                  localStorage.setItem("user", JSON.stringify(decoded));
                  setUser(decoded);
                  setStatusMessage("✅ Login successful! Redirecting...");
                  handleNavigate("/");
                }}
                onError={() => console.log("Login Failed")}
                shape="pill"
                theme="filled_blue"
                size="large"
                width="280"
              />
            </>
          )}
        </div>

        {/* Divider */}
        <div className="flex items-center w-full mb-8">
          <div className="flex-grow border-t border-cyan-500/30"></div>
          <span className="mx-3 text-slate-400 text-sm">or</span>
          <div className="flex-grow border-t border-cyan-500/30"></div>
        </div>

        {/* Back Button */}
        <Link
          to="/"
          className="px-6 py-3 w-full text-center text-lg font-semibold rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 text-slate-900 shadow-md hover:shadow-cyan-400/50 transition"
        >
          ⬅ Back to Home
        </Link>
        {statusMessage && (
          <p className="mt-6 text-green-400 font-semibold text-center animate-pulse">
            {statusMessage}
          </p>
        )}
      </div>
    </div>
  );
}
