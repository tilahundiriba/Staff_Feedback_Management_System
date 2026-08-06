import React from 'react'
import { CheckCircle } from "lucide-react";
const ThankYou = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center p-5">

      <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-sm text-center">

        <div className="flex justify-center">

          <div className="bg-blue-600 rounded-full p-5">

            <CheckCircle
              size={60}
              className="text-white"
            />

          </div>

        </div>

        <h1 className="text-4xl font-bold text-blue-600 mt-8">
          Thank You!
        </h1>

        <p className="text-gray-500 mt-4 leading-7">
          Your feedback has been submitted successfully.
        </p>

        <div className="text-yellow-400 text-3xl mt-8">
          ⭐⭐⭐⭐⭐
        </div>

        <p className="text-gray-500 mt-6">
          Your opinion helps us improve our services.
        </p>

        <button className="mt-10 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg">
          Finish
        </button>

      </div>

    </div>
  );
}

export default ThankYou
