import React from "react";

const Welcome = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-5">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-8">
        {/* Logo */}
        <div className="flex items-center gap-3 justify-center">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="text-blue-600 text-xl font-bold">⬢</span>
          </div>

          <h2 className="font-semibold text-gray-800 text-lg">
            ABC Organization
          </h2>
        </div>

        {/* Heading */}

        <div className="mt-8 text-center">
          <h1 className="text-4xl font-bold text-blue-600 leading-tight">
            We Value
            <br />
            Your Feedback
          </h1>

          <p className="mt-4 text-gray-500 text-sm leading-6">
            Your feedback helps us improve our services and serve you better.
          </p>
        </div>

        {/* Illustration */}

        <div className="my-10 flex justify-center">
          <img src="/feedback.png" alt="Feedback" className="w-60" />
        </div>

        {/* Button */}

        <button className="w-full bg-blue-600 hover:bg-blue-700 duration-300 text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2">
          Start Feedback
          <ArrowRight size={18} />
        </button>

        {/* Footer */}

        <p className="mt-8 text-center text-gray-400 text-sm">
          Thank you for taking the time!
        </p>
      </div>
    </div>
  );
};

export default Welcome;
