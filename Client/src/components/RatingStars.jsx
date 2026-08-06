import React from 'react'

import { Star } from "lucide-react";

function RatingStars({
  value,
  onChange,
}) {
  return (
    <div className="flex gap-1">

      {[1,2,3,4,5].map((star)=>(

        <Star
          key={star}
          size={20}
          onClick={()=>onChange(star)}
          className={`cursor-pointer
          ${
            star<=value
            ? "fill-blue-600 text-blue-600"
            : "text-gray-300"
          }`}
        />

      ))}

    </div>
  );
}

export default RatingStars;