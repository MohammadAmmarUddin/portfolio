import React from "react";
import { Link as RouterLink } from "react-router-dom";

const WhatMadeMeUnique = () => {
  return (
    <section id="unique" className="px-6 md:px-16 py-24 text-white relative">
      {/* 🔙 Back to Home Button */}
      <div className="mb-8">
        <RouterLink to="/">
          <button
            className="flex items-center gap-2 text-cyan-400 border border-cyan-400
            px-5 py-2 rounded-xl hover:bg-cyan-400 hover:text-black
            transition duration-500 hover:shadow-[0_0_25px_rgba(0,238,255,0.6)]"
          >
            ← Back to Home
          </button>
        </RouterLink>
      </div>

      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
        <span className="text-cyan-400">08.</span> What Made Me Unique
      </h2>

      <div className="max-w-5xl mx-auto space-y-10">
        {/* Industry Experience */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-cyan-400/40 transition">
          <h3 className="text-xl font-semibold text-cyan-400 mb-2">
            💼 Industry Experience
          </h3>
          <p className="text-gray-300 leading-relaxed">
            I have worked on agile projects while collaborating with
            cross-functional teams to deliver scalable and efficient solutions.
            Through this experience, I developed the ability to optimize
            existing systems, identify performance bottlenecks, and proactively
            improve them.
          </p>
          <p className="mt-3 text-sm text-cyan-300">
            <strong>Value:</strong> These abilities directly benefit ongoing and
            future projects by ensuring efficiency, scalability, and
            maintainability.
          </p>
        </div>

        {/* Problem Solving */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-cyan-400/40 transition">
          <h3 className="text-xl font-semibold text-cyan-400 mb-2">
            🧠 Strong Problem-Solving & Critical Thinking
          </h3>
          <p className="text-gray-300 leading-relaxed">
            I have solved over <strong>200+</strong> problems through
            competitive programming.
          </p>
          <p className="mt-3 text-sm text-cyan-300">
            <strong>Value:</strong> Helps tackle critical system issues and
            optimize algorithms effectively.
          </p>
        </div>

        {/* Adaptability */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-cyan-400/40 transition">
          <h3 className="text-xl font-semibold text-cyan-400 mb-2">
            ⚡ Adaptability & Fast Learning Ability
          </h3>
          <p className="text-gray-300 leading-relaxed">
            While working on <strong>ScaleBridger</strong>, I quickly learned
            AWS, Lambda, and cloud-based workflows.
          </p>
          <p className="mt-3 text-sm text-cyan-300">
            <strong>Value:</strong> Smooth integration of new technologies.
          </p>
        </div>

        {/* Growth Mindset */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-cyan-400/40 transition">
          <h3 className="text-xl font-semibold text-cyan-400 mb-2">
            🚀 Growth Mindset & Staying Updated
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Continuous learning through self-study, projects, and research.
          </p>
          <p className="mt-3 text-sm text-cyan-300">
            <strong>Value:</strong> Modern and future-ready development
            practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatMadeMeUnique;
