import React from 'react'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Plus,
  Search,
  MoreVertical,
  Users,
  Eye
} from "lucide-react";

function Employees() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
 const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/employees");

        if (!response.ok) {
          throw new Error("Failed to fetch employees");
        }

        const data = await response.json();

        setEmployees(data);
      } catch (error) {
        console.error(error);
        setError("Unable to load employees");
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  if (loading) {
    return (
      <div className="p-6 text-center">
        <p className="text-gray-500">Loading employees...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="bg-red-50 text-red-600 p-4 rounded-lg">
          {error}
        </div>
      </div>
    );
  }
  const filteredEmployees = employees.filter((employee) => {
  const searchText = search.toLowerCase();

  return (
    `${employee.first_name} ${employee.last_name}`
      .toLowerCase()
      .includes(searchText) ||

    employee.employee_id
      ?.toLowerCase()
      .includes(searchText) ||

    employee.email
      ?.toLowerCase()
      .includes(searchText) ||

    employee.phone
      ?.toLowerCase()
      .includes(searchText) ||

    employee.position
      ?.toLowerCase()
      .includes(searchText) ||

    employee.department
      ?.toLowerCase()
      .includes(searchText)
  );
});
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

        <button className="bg-blue-600 text-white px-4 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700"
        onClick={() => navigate("/admin/addEmployees")}>
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
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                  ID
                </th>

                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                  Name
                </th>

                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                  Position
                </th>

                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                  Department
                </th>

                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                  Phone
                </th>

                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                  Status
                </th>
                 <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
           
            <tbody className="divide-y divide-gray-100">
              {filteredEmployees.map((employee) => (
                <tr
                  key={employee.employee_id}
                  className="hover:bg-gray-50"
                >
                  <td className="px-6 py-4 font-medium text-blue-600">
                    {employee.employee_id}
                  </td>

                  <td className="px-6 py-4 text-gray-800">
                    {employee.first_name} {employee.last_name}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {employee.position}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {employee.department}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {employee.phone}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        employee.status
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {employee.status ? "Active" : "Inactive"}
                    </span>
                  </td>
                   <button
                      onClick={() =>
                        navigate(
                          `/admin/employees/${employee.employee_id}/ratings`
                        )
                      }
                      className="
                        inline-flex
                        items-center
                        justify-center
                        p-2
                        rounded-lg
                        text-blue-600
                        hover:bg-blue-50
                        transition
                      "
                      title="View employee ratings"
                    >
                      <Eye size={20} />
                    </button>

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