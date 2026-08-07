import React from 'react'

import { Search, Star } from "lucide-react";
import { useState } from "react";

const feedbackData = [
  {
    customer: "Abebe Kebede",
    employee: "John Doe",
    service: "Account Opening",
    rating: 5,
    comment: "Excellent service and very helpful.",
    date: "Aug 7, 2026",
  },
  {
    customer: "Sara Ahmed",
    employee: "Jane Smith",
    service: "Customer Support",
    rating: 4,
    comment: "Very professional service.",
    date: "Aug 6, 2026",
  },
  {
    customer: "Michael Brown",
    employee: "David Ali",
    service: "Claim Processing",
    rating: 5,
    comment: "My problem was solved quickly.",
    date: "Aug 5, 2026",
  },
];

function Feedbacks() {
  const [search, setSearch] = useState("");

  const filtered = feedbackData.filter(
    (item) =>
      item.customer.toLowerCase().includes(search.toLowerCase()) ||
      item.employee.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl sm:text-3xl font-bold">
          Feedback
        </h1>

        <p className="text-gray-500">
          Review customer feedback and ratings
        </p>
      </div>

      <div className="bg-white p-4 rounded-2xl border">

        <div className="relative max-w-md">

          <Search
            size={20}
            className="absolute left-3 top-3 text-gray-400"
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search feedback..."
            className="w-full border rounded-xl p-3 pl-10"
          />

        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

        {filtered.map((item, index) => (

          <div
            key={index}
            className="bg-white border rounded-2xl p-5 shadow-sm"
          >

            <div className="flex flex-col sm:flex-row justify-between gap-3">

              <div>

                <h3 className="font-semibold">
                  {item.customer}
                </h3>

                <p className="text-sm text-gray-500">
                  Served by {item.employee}
                </p>

              </div>

              <div className="flex items-center gap-1 text-yellow-500">

                <Star size={18} fill="currentColor" />

                <span>
                  {item.rating}.0
                </span>

              </div>

            </div>

            <div className="mt-4">

              <span className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                {item.service}
              </span>

            </div>

            <p className="text-gray-600 mt-4">
              "{item.comment}"
            </p>

            <p className="text-xs text-gray-400 mt-4">
              {item.date}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Feedbacks;