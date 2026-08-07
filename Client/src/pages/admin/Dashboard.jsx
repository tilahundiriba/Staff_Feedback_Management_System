import React from 'react'

import {
  Users,
  UserRound,
  MessageSquare,
  Star,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
} from "lucide-react";

const stats = [
  {
    title: "Total Employees",
    value: "128",
    change: "+12%",
    icon: Users,
  },
  {
    title: "Total Customers",
    value: "2,458",
    change: "+18%",
    icon: UserRound,
  },
  {
    title: "Total Feedback",
    value: "1,824",
    change: "+24%",
    icon: MessageSquare,
  },
  {
    title: "Average Rating",
    value: "4.6",
    change: "+8%",
    icon: Star,
  },
];

const recentFeedback = [
  {
    customer: "Abebe Kebede",
    employee: "John Doe",
    service: "Customer Support",
    rating: 5,
    date: "Aug 7, 2026",
  },
  {
    customer: "Sara Ahmed",
    employee: "Jane Smith",
    service: "Account Opening",
    rating: 4,
    date: "Aug 7, 2026",
  },
  {
    customer: "Michael Brown",
    employee: "David Ali",
    service: "Information",
    rating: 5,
    date: "Aug 6, 2026",
  },
];

function Dashboard() {
  return (
    <div className="w-full space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-1 text-sm sm:text-base">
          Overview of your staff feedback system
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
            >
              <div className="flex justify-between items-start">

                <div>
                  <p className="text-sm text-gray-500">
                    {stat.title}
                  </p>

                  <h2 className="text-2xl sm:text-3xl font-bold mt-2">
                    {stat.value}
                  </h2>

                  <p className="text-sm text-green-600 mt-2">
                    {stat.change} from last month
                  </p>
                </div>

                <div className="bg-blue-50 p-3 rounded-xl">
                  <Icon className="text-blue-600" size={22} />
                </div>

              </div>
            </div>
          );
        })}

      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        <div className="bg-white rounded-2xl shadow-sm border p-5">

          <div className="flex justify-between items-center mb-5">

            <div>
              <h2 className="font-semibold text-lg">
                Feedback Overview
              </h2>

              <p className="text-sm text-gray-500">
                Feedback received this month
              </p>
            </div>

            <TrendingUp className="text-green-500" />
          </div>

          <div className="h-56 flex items-end gap-2 sm:gap-4">

            {[40, 65, 50, 80, 55, 90, 70, 85, 75, 95, 80, 100].map(
              (height, index) => (
                <div
                  key={index}
                  className="flex-1 bg-blue-500 rounded-t-lg"
                  style={{ height: `${height}%` }}
                />
              )
            )}

          </div>

          <div className="flex justify-between text-xs text-gray-400 mt-3">
            <span>Jan</span>
            <span>Mar</span>
            <span>May</span>
            <span>Jul</span>
            <span>Aug</span>
          </div>

        </div>

        {/* Rating */}
        <div className="bg-white rounded-2xl shadow-sm border p-5">

          <h2 className="font-semibold text-lg">
            Rating Overview
          </h2>

          <p className="text-sm text-gray-500">
            Customer satisfaction
          </p>

          <div className="flex items-center justify-center py-8">

            <div className="text-center">

              <div className="text-5xl font-bold text-blue-600">
                4.6
              </div>

              <div className="text-yellow-400 text-2xl mt-2">
                ★★★★★
              </div>

              <p className="text-gray-500 text-sm mt-2">
                Based on 1,824 reviews
              </p>

            </div>

          </div>

          {[5, 4, 3, 2, 1].map((rating) => (
            <div
              key={rating}
              className="flex items-center gap-3 mb-2"
            >
              <span className="text-sm w-5">
                {rating}
              </span>

              <div className="flex-1 bg-gray-100 h-2 rounded-full">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{
                    width: `${rating * 18}%`,
                  }}
                />
              </div>
            </div>
          ))}

        </div>

      </div>

      {/* Recent Feedback */}
      <div className="bg-white rounded-2xl shadow-sm border">

        <div className="p-5 border-b flex justify-between items-center">

          <div>
            <h2 className="font-semibold text-lg">
              Recent Feedback
            </h2>

            <p className="text-sm text-gray-500">
              Latest customer responses
            </p>
          </div>

          <ArrowUpRight className="text-gray-400" />

        </div>

        <div className="overflow-x-auto">

          <table className="w-full min-w-[700px]">

            <thead className="bg-gray-50">

              <tr>
                <th className="text-left p-4 text-sm">Customer</th>
                <th className="text-left p-4 text-sm">Employee</th>
                <th className="text-left p-4 text-sm">Service</th>
                <th className="text-left p-4 text-sm">Rating</th>
                <th className="text-left p-4 text-sm">Date</th>
              </tr>

            </thead>

            <tbody>

              {recentFeedback.map((item, index) => (

                <tr key={index} className="border-t">

                  <td className="p-4 text-sm">
                    {item.customer}
                  </td>

                  <td className="p-4 text-sm">
                    {item.employee}
                  </td>

                  <td className="p-4 text-sm">
                    {item.service}
                  </td>

                  <td className="p-4">
                    <span className="text-yellow-500">
                      ★ {item.rating}
                    </span>
                  </td>

                  <td className="p-4 text-sm text-gray-500">
                    {item.date}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;