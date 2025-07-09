import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-gray-800 flex items-center justify-center min-h-screen px-2 ">
      <div className="text-center max-w-md">
        {/* Profile Image */}
        <img
          src="../profile.png" // Replace with your actual image path or URL
          alt="Akhil Singh"
          className="w-26 h-26 mx-auto rounded-full object-cover border-4 border-green-500 shadow-lg"
        />

        {/* Name */}
        <h1 className="text-3xl md:text-4xl font-bold mt-4 text-white">Akhil Kumar Singh</h1>

        {/* Title */}
        <h2 className="text-lg md:text-2xl text-green-400 mt-2">Software Developer</h2>


        {/* Short Description */}
        <p className="text-white mt-3 text-sm md:text-base px-2">
          I create elegant, high-performance web applications with clean code and smooth user experiences.
Specializing in React, Node.js, and MongoDB, I’m passionate about solving real-world problems through modern web technologies.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-5 flex-wrap">
          <a
            href="/contact"
            className="bg-green-400 text-black font-bold px-5 py-2 rounded-full hover:bg-green-700 transition"
          >
            Contact Me
          </a>
          <a
            href="/project"
            className="border border-blue-600 text-blue-600 font-bold px-5 py-2 rounded-full hover:bg-blue-50 transition"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}


