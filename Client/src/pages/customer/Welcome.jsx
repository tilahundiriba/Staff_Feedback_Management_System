import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
const Welcome = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-5 w-full">
      <div className="w-full max-w-sm md:max-w-xl bg-white rounded-2xl shadow-xl p-8  items-center justify-center ">
        {/* Logo */}
        <div className="flex items-center gap-3 justify-center">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <img
              src="../public/ADDIS_MESOB.jpg"
              alt="Feedback"
              className="w-60 rounded-full"
            />
          </div>

          <h2 className="font-semibold text-gray-800 text-lg">
            ADDIS MESOB Organization
          </h2>
        </div>

        {/* Heading */}

        <div className="mt-8 text-center">
          <h1 className="text-4xl font-bold text-blue-600 leading-tight">
           {t("welcome")}
          </h1>

          <p className="mt-4 text-gray-500 text-sm leading-6">
            {t("feedbackDescription")}
            
          </p>
        </div>

        {/* Illustration */}

        <div className="my-10 flex justify-center">
          <img
            src="../public/feedbackImg.png"
            alt="Feedback"
            className="w-60"
          />
        </div>

        {/* Button */}

        <button
          className="w-full  bg-blue-600 hover:bg-blue-700  duration-300 text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2"
          onClick={() => navigate("/customer-info")}
        >
         {t("startFeedback")}
          {/* <ArrowRight size={24}/> */}
        </button>

        {/* Footer */}

        <p className="mt-8 text-center text-gray-400 text-sm">
          {t("thankYouForTakingTime")}
        </p>
      </div>
    </div>
  );
};

export default Welcome;
