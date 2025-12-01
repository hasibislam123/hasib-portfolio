import React from "react";
import {
  BookOpenIcon,
  AcademicCapIcon,
  CodeBracketSquareIcon,
} from "@heroicons/react/24/outline";

export default function About() {
  return (
    <section className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="w-1/2 h-full bg-gradient-to-br from-purple-100/70 via-white to-pink-100/70 blur-3xl rounded-full absolute top-[-10%] left-[-10%] dark:from-purple-900/40 dark:to-pink-900/40"></div>
        <div className="w-1/3 h-full bg-gradient-to-tl from-cyan-100/70 via-white to-indigo-100/70 blur-3xl rounded-full absolute bottom-[-10%] right-[-10%] dark:from-cyan-900/40 dark:to-indigo-900/40"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-300 tracking-wider uppercase">
            Introduction
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-800 dark:text-white mt-2">
            About me
          </h1>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-12 mt-16">
          {/* Image */}
          <div className="w-full lg:w-1/3 mb-10 lg:mb-0 relative h-[400px] overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="/img2.png"
              alt="My Image"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 ring-4 ring-white/30 rounded-3xl"></div>
          </div>

          {/* Text + Cards */}
          <div className="w-full lg:w-2/3">
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                ITS ME
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I am an aspiring <strong>Fullstack Developer</strong> dedicated
                to mastering modern web technologies. Im actively building
                real-world projects to gain experience and prepare for
                impactful collaborations in the tech industry.
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <Card
                icon={BookOpenIcon}
                title="Languages"
                description="HTML, CSS, Tailwind, JavaScript, React.js, Node.js, MongoDB."
              />
              <Card
                icon={AcademicCapIcon}
                title="Education"
                description="Diploma in Computer Science, currently studying at college."
              />
              <Card
                icon={CodeBracketSquareIcon}
                title="Projects"
                description="Built 10+ projects with clean code and responsive design."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Card Component
const Card = ({ icon: Icon, title, description }) => (
  <div className="p-6 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
    <div
      className="w-12 h-12 flex items-center justify-center rounded-xl mb-4"
      style={{
        background: "linear-gradient(135deg, #e9d5ff, #f3e8ff)",
        boxShadow:
          "0 4px 6px -1px rgb(168 85 247 / 0.1), 0 2px 4px -2px rgb(168 85 247 / 0.1)",
      }}
    >
      <Icon className="w-6 h-6 text-purple-600" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
      {title}
    </h3>
    <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);
