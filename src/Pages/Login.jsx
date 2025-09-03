import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'

export default function Login() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-sky-100 via-sky-200 to-sky-300">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center">
        <p className="text-4xl font-extrabold text-slate-800 mb-6">Welcome Back</p>
        <p className="text-slate-500 mb-10 text-center">
          Sign in with your Google account to continue
        </p>
        <div className="w-full flex justify-center mb-8">
          <GoogleLogin onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
            console.log(jwtDecode(credentialResponse.credential));
            localStorage.setItem("user", JSON.stringify(decoded));
            navigate("/")
          }}
            onError={() => console.log(`Login Failed`)}
            auto_select={true}
            shape="pill" theme="outline" size="large" width="300"
          />
        </div>
        <div className="flex items-center w-full mb-8">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-3 text-gray-400 text-sm">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <Link to="/" className="px-6 py-3 w-full text-center text-lg font-semibold border-2 border-sky-600 text-sky-700 rounded-xl shadow-md hover:bg-sky-600 hover:text-white transition duration-300">⬅ Back to Home</Link>
      </div>
    </div>
  )
}