import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Star } from "lucide-react";
import { useTranslation } from "react-i18next";
const categories = [
  "friendliness",
  "communication",
  "professionalism",
  "knowledge",
  "responseTime",
  "problemSolving",
  "respect",
  "overallSatisfaction",
];

const Feedback = () => {
  const navigate = useNavigate();
  const [ratings, setRatings] = useState({});
const { t } = useTranslation();
  const rate = (category, value) => {
    setRatings({
      ...ratings,
      [category]: value,
    });
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center p-5">

      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg md:max-w-4xl">

        <h2 className="text-2xl font-bold">
         
          {t("rateExperience")}
        </h2>

        <p className="text-gray-500 mb-8">
        
          {t("rateCategories")}
        </p>

        {categories.map((category) => (

          <div
            key={category}
            className="flex justify-between items-center mb-5"
          >

            <span>{t(category)}</span>

            <div className="flex gap-1">

              {[1,2,3,4,5].map((star)=>(

                <Star
                  key={star}
                  size={20}
                  onClick={()=>rate(category,star)}
                  className={`cursor-pointer ${
                    star<= (ratings[category] || 0)
                      ? "fill-blue-600 text-blue-600"
                      : "text-gray-300"
                  }`}
                />

              ))}

            </div>

          </div>

        ))}

        <div className="mt-6">

          <label className="font-medium">
          
            {t("additionalComments")}
          </label>

          <textarea
            rows="4"
            placeholder={t("writeComments")}
            className="w-full mt-2 border rounded-lg p-3"
          />

        </div>

        <div className="flex justify-between mt-8">

          <button className="border px-6 py-2 rounded-lg"
          onClick={() => navigate("/employee-selection")}>
            {t("back")}
          </button>

          <button className="bg-blue-600 text-white px-8 py-2 rounded-lg"
          onClick={() => navigate("/thankyou")}>
{t("submitFeedback")}
            
            
          </button>

        </div>

      </div>

    </div>
  );
}

export default Feedback
