import React from 'react'

import {
  TrendingUp,
  Star,
  Users,
  MessageSquare,
} from "lucide-react";

function Analytics() {
  const monthlyData = [
    45, 60, 52, 75, 68, 85, 78, 92, 80, 95, 88, 100,
  ];

  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl sm:text-3xl font-bold">
          Analytics
        </h1>

        <p className="text-gray-500">
          Analyze customer feedback and employee performance
        </p>
      </div>

      {/* Stats */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

        {[
          {
            title: "Satisfaction",
            value: "92%",
            icon: Star,
          },
          {
            title: "Feedback",
            value: "1,824",
            icon: MessageSquare,
          },
          {
            title: "Customers",
            value: "2,458",
            icon: Users,
          },
          {
            title: "Growth",
            value: "+24%",
            icon: TrendingUp,
          },
        ].map((item) => {

          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="bg-white border rounded-2xl p-5"
            >

              <div className="flex justify-between">

                <div>
                  <p className="text-sm text-gray-500">
                    {item.title}
                  </p>

                  <h2 className="text-3xl font-bold mt-2">
                    {item.value}
                  </h2>
                </div>

                <Icon className="text-blue-600" />

              </div>

            </div>
          );
        })}

      </div>

      {/* Chart */}

      <div className="bg-white border rounded-2xl p-5">

        <h2 className="font-semibold text-lg">
          Monthly Feedback
        </h2>

        <p className="text-sm text-gray-500">
          Feedback trends throughout the year
        </p>

        <div className="h-64 mt-8 flex items-end gap-2 sm:gap-4">

          {monthlyData.map((value, index) => (

            <div
              key={index}
              className="flex-1 flex flex-col justify-end"
            >

              <div
                className="bg-blue-500 rounded-t-md"
                style={{ height: `${value}%` }}
              />

            </div>

          ))}

        </div>

        <div className="flex justify-between text-xs text-gray-400 mt-3">
          <span>Jan</span>
          <span>Mar</span>
          <span>May</span>
          <span>Jul</span>
          <span>Sep</span>
          <span>Dec</span>
        </div>

      </div>

      {/* Employee Performance */}

      <div className="bg-white border rounded-2xl p-5">

        <h2 className="font-semibold text-lg">
          Top Performing Employees
        </h2>

        <div className="space-y-4 mt-5">

          {[
            ["John Doe", 4.9],
            ["Jane Smith", 4.8],
            ["David Ali", 4.7],
            ["Sarah Johnson", 4.6],
          ].map(([name, rating], index) => (

            <div
              key={name}
              className="flex items-center gap-4"
            >

              <span className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-semibold">
                {index + 1}
              </span>

              <div className="flex-1">

                <p className="font-medium">
                  {name}
                </p>

                <div className="w-full bg-gray-100 h-2 rounded-full mt-2">

                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{
                      width: `${rating * 20}%`,
                    }}
                  />

                </div>

              </div>

              <span className="text-yellow-500">
                ★ {rating}
              </span>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Analytics;