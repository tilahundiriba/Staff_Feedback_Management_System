import React from 'react'

import {
  Download,
  FileText,
  Calendar,
} from "lucide-react";

function Reports() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl sm:text-3xl font-bold">
          Reports
        </h1>

        <p className="text-gray-500">
          Generate and download feedback reports
        </p>
      </div>

      <div className="bg-white border rounded-2xl p-5">

        <h2 className="font-semibold text-lg">
          Generate Report
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">

          <div>
            <label className="text-sm font-medium">
              Start Date
            </label>

            <div className="relative mt-2">

              <Calendar
                className="absolute left-3 top-3 text-gray-400"
                size={18}
              />

              <input
                type="date"
                className="w-full border rounded-xl p-3 pl-10"
              />

            </div>
          </div>

          <div>
            <label className="text-sm font-medium">
              End Date
            </label>

            <div className="relative mt-2">

              <Calendar
                className="absolute left-3 top-3 text-gray-400"
                size={18}
              />

              <input
                type="date"
                className="w-full border rounded-xl p-3 pl-10"
              />

            </div>
          </div>

          <div>
            <label className="text-sm font-medium">
              Report Type
            </label>

            <select className="w-full border rounded-xl p-3 mt-2">
              <option>Feedback Report</option>
              <option>Employee Report</option>
              <option>Service Report</option>
              <option>Customer Report</option>
            </select>
          </div>

          <div className="flex items-end">

            <button className="w-full bg-blue-600 text-white p-3 rounded-xl flex items-center justify-center gap-2">
              <FileText size={18} />
              Generate
            </button>

          </div>

        </div>

      </div>

      <div className="bg-white border rounded-2xl p-5">

        <h2 className="font-semibold text-lg">
          Available Reports
        </h2>

        <div className="space-y-3 mt-5">

          {[
            "Monthly Feedback Report",
            "Employee Performance Report",
            "Service Satisfaction Report",
          ].map((report) => (

            <div
              key={report}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border rounded-xl p-4"
            >

              <div className="flex items-center gap-3">

                <div className="bg-blue-50 p-2 rounded-lg">
                  <FileText className="text-blue-600" />
                </div>

                <span className="font-medium">
                  {report}
                </span>

              </div>

              <button className="flex items-center justify-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-50">
                <Download size={18} />
                Download
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Reports;