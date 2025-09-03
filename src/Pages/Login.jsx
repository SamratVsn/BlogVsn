import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0a26dd] via-[#061666] to-[#020b33] px-4">
      <div className="w-full max-w-md bg-[#020b33]/80 backdrop-blur-lg rounded-2xl border border-cyan-500/30 shadow-xl p-8 flex flex-col items-center text-white">
        
        {/* Title */}
        <p className="text-4xl font-extrabold text-cyan-400 drop-shadow-lg mb-4">
          Welcome Back
        </p>
        <p className="text-slate-300 mb-10 text-center">
          Sign in with your Google account to continue
        </p>

        {/* Google Login */}
        <div className="w-full flex justify-center mb-8">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
              const decoded = jwtDecode(credentialResponse.credential); // ✅ define decoded
              console.log(decoded);
              localStorage.setItem("user", JSON.stringify(decoded));
              navigate("/");
            }}
            onError={() => console.log("Login Failed")}
            shape="pill"
            theme="filled_blue"
            size="large"
            width="280"
          />
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
      </div>
    </div>
  );
}
