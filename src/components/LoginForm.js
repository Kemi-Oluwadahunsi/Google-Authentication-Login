import React from 'react';
import { Link } from 'react-router-dom';
import {signInWithGoogle} from './Firebase'
import { FcGoogle } from 'react-icons/fc';

export default function Login() {
 

  return (
    <div className="grid place-content-center h-screen w-full">
      <section className="bg-gray-900 form-width justify-center rounded-lg">
        <form className="w-full mx-auto p-8 rounded-lg">
          <h2 className="text-4xl text-white font-bold text-center">SIGN IN</h2>

          {/* Your existing login form fields */}
          <div className="flex flex-col text-gray-300 py-2">
            <label>User Name</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
            />
          </div>

          <div className="flex flex-col text-gray-300 py-2">
            <label>Password</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="password"
            />
          </div>

          <div className="flex justify-between text-gray-300 py-2">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" /> Remember Me
            </p>
            <p>Forgot Password</p>
          </div>

          {/* Your existing "Sign In" button */}
          <button
            className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
          >
            Sign In
          </button>

          <span className='text-gray-300  grid place-content-center'>or</span>
          <button
            onClick={signInWithGoogle}
            className=" flex justify-center gap-3 w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
          >
            <FcGoogle className="text-2xl" />
            Sign In with Google
          </button>

          <p className="text-gray-300 flex justify-around">
            Not a User?
            <span className="line">
              {/* Use the router link to the register page */}
              <Link to="/register" className='hover:text-teal-600'>Sign Up</Link>
            </span>
          </p>
        </form>
      </section>
    </div>
  );
}
