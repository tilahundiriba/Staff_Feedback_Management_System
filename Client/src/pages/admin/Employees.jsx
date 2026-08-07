import React from 'react'

import { useState } from "react";
import {
  Plus,
  Search,
  MoreVertical,
  Users,
} from "lucide-react";

const employees = [
  {
    id: 1,
    name: "John Doe",
    department: "Customer Service",
    position: "Customer Service Officer",
    status: "Active",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Jane Smith",
    department: "Operations",
    position: "Senior Officer",
    status: "Active",
    rating: 4.6,
  },
  {
    id: 3,
    name: "David Ali",
    department: "Customer Support",
    position: "Support Specialist",
    status: "Active",
    rating: 4.5,
  },
];

function Employees() {
  const [search, setSearch] = useState("");

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full space-y-6">

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">

        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">
            Employees
          </h1>

          <p className="text-gray-500 mt-1">
            Manage your organization employees
          </p>
        </div>

        <button className="bg-blue-600 text-white px-4 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700">
          <Plus size={20} />
          Add Employee
        </button>

      </div>

      <div className="bg-white rounded-2xl border shadow-sm p-4">

        <div className="relative w-full sm:max-w-sm">

          <Search
            className="absolute left-3 top-3 text-gray-400"
            size={20}
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search employees..."
            className="w-full border rounded-xl py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

      </div>

      <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full min-w-[800px]">

            <thead className="bg-gray-50">

              <tr>
                <th className="p-4 text-left">Employee</th>
                <th className="p-4 text-left">Department</th>
                <th className="p-4 text-left">Position</th>
                <th className="p-4 text-left">Rating</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4"></th>
              </tr>

            </thead>

            <tbody>

              {filteredEmployees.map((employee) => (

                <tr key={employee.id} className="border-t">

                  <td className="p-4">

                    <div className="flex items-center gap-3">

                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <Users className="text-blue-600" size={18} />
                      </div>

                      <span className="font-medium">
                        {employee.name}
                      </span>

                    </div>

                  </td>

                  <td className="p-4 text-gray-600">
                    {employee.department}
                  </td>

                  <td className="p-4 text-gray-600">
                    {employee.position}
                  </td>

                  <td className="p-4 text-yellow-500">
                    ★ {employee.rating}
                  </td>

                  <td className="p-4">

                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                      {employee.status}
                    </span>

                  </td>

                  <td className="p-4">
                    <button>
                      <MoreVertical />
                    </button>
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

export default Employees;