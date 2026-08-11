import React from 'react'
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
const ThankYou = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full bg-slate-100 flex items-center justify-center px-4 py-6 sm:px-6 md:px-8">

      <div    className="
          w-full
          max-w-xs
          sm:max-w-sm
          md:max-w-4xl
          bg-white
          rounded-2xl
          shadow-lg
          px-5 py-7
          sm:px-8 sm:py-9
          md:px-10 md:py-10
          text-center
        ">

        <div className="flex justify-center">

          <div className="
              bg-blue-600
              rounded-full
              p-4
              sm:p-5
              md:p-6
            ">

            <CheckCircle
              size={60}
                            className="
                text-white
                w-12 h-12
                sm:w-14 sm:h-14
                md:w-16 md:h-16
              "

            />

          </div>

        </div>

        <h1      className="
            font-bold
            text-blue-600
            text-3xl
            sm:text-4xl
            md:text-4xl
            mt-6
            sm:mt-8
          ">
          Thank You!
        </h1>

        <p    className="
            text-gray-500
            text-sm
            sm:text-base
            leading-6
            sm:leading-7
            mt-3
            sm:mt-4
          ">
          Your feedback has been submitted successfully.
        </p>

        <div           className="
            text-yellow-400
            text-2xl
            sm:text-3xl
            mt-6
            sm:mt-8
            tracking-wide
          "
>
          ⭐⭐⭐⭐⭐
        </div>

        <p      className="
            text-gray-500
            text-sm
            sm:text-base
            leading-6
            mt-5
            sm:mt-6
          ">
          Your opinion helps us improve our services.
        </p>

        <button  className="
            mt-7
            sm:mt-10
            w-full
            md:w-md
            bg-blue-600
            hover:bg-blue-700
            active:bg-blue-800
            text-white
            py-3
            sm:py-3.5
            rounded-lg
            font-medium
            text-sm
            sm:text-base
            transition
            duration-200
          "
        onClick={() => navigate("/")}>
          Finish
        </button>

      </div>

    </div>
  );
}

export default ThankYou
