"use client";

export default function HeroBanner() {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center px-6 mt-[5rem]"
      style={{ backgroundImage: "url('/hero.jpeg')" }}
    >
      {/* Dark Overlay for Better Readability */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>

      {/* Centered Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto text-white">
        <h1 className="text-4xl md:leading-[4.5rem] md:text-6xl font-bold ">
          Empower Your Future with <br />
          <span className="text-purple-300"> Codeware IT Pvt Ltd</span>
        </h1>
        <p className="text-lg mt-4 text-gray-200">
          Internship Certifications & Expert Training in Full Stack & MERN Stack
          Development. Master in-demand technologies through hands-on projects
          and expert mentorship to launch your tech career!
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
