import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Star } from "lucide-react";

const categories = [
  "Friendliness",
  "Communication",
  "Professionalism",
  "Knowledge",
  "Response Time",
  "Problem Solving",
  "Respect",
  "Overall Satisfaction",
];

const Feedback = () => {
  const navigate = useNavigate();
  const [ratings, setRatings] = useState({});

  const rate = (category, value) => {
    setRatings({
      ...ratings,
      [category]: value,
    });
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center p-5">

      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg">

        <h2 className="text-2xl font-bold">
          Rate Your Experience
        </h2>

        <p className="text-gray-500 mb-8">
          Please rate the following categories
        </p>

        {categories.map((category) => (

          <div
            key={category}
            className="flex justify-between items-center mb-5"
          >

            <span>{category}</span>

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
            Additional Comments
          </label>

          <textarea
            rows="4"
            placeholder="Write your comments..."
            className="w-full mt-2 border rounded-lg p-3"
          />

        </div>

        <div className="flex justify-between mt-8">

          <button className="border px-6 py-2 rounded-lg"
          onClick={() => navigate("/employee-selection")}>
            Back
          </button>

          <button className="bg-blue-600 text-white px-8 py-2 rounded-lg"
          onClick={() => navigate("/thankyou")}>

            Submit Feedback
          </button>

        </div>

      </div>

    </div>
  );
}

export default Feedback
