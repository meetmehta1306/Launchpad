import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div
      className="h-screen w-full flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage: "linear-gradient(to right, #1d2671, #283e51, #0f2027)",
      }}
    >
      {/* Hero Section */}
      <div className="text-center px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Launch Your Career with <span className="text-yellow-400">Launchpad</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Discover opportunities, grow your skills, and achieve your dreams.
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-4">
          <Link to="/signup">
            <button className="py-3 px-6 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg shadow-lg transition duration-200">
              Get Started
            </button>
          </Link>
          <Link to="/learn-more">
            <button className="py-3 px-6 border-2 border-yellow-500 text-yellow-400 font-semibold rounded-lg shadow-lg transition duration-200 hover:bg-yellow-500 hover:text-black">
              Learn More
            </button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            🚀
          </div>
          <h3 className="mt-4 text-xl font-semibold">Fast Hiring</h3>
          <p className="text-gray-300">
            Connect with top companies and get hired quickly.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            🌟
          </div>
          <h3 className="mt-4 text-xl font-semibold">Top Opportunities</h3>
          <p className="text-gray-300">
            Access exclusive job listings tailored to your skills.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            📈
          </div>
          <h3 className="mt-4 text-xl font-semibold">Career Growth</h3>
          <p className="text-gray-300">
            Learn and grow with resources designed for success.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;