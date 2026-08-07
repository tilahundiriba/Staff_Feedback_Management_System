import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Search } from "lucide-react";

const employees = [
  {
    id: 1,
    name: "John Doe",
    position: "Customer Service Officer",
    department: "Customer Service",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Senior Officer",
    department: "Customer Service",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    name: "Michael Ali",
    position: "Support Specialist",
    department: "Customer Support",
    image: "https://i.pravatar.cc/100?img=3",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    position: "Relationship Manager",
    department: "Sales",
    image: "https://i.pravatar.cc/100?img=4",
  },
  {
    id: 5,
    name: "David Brown",
    position: "Service Executive",
    department: "Operations",
    image: "https://i.pravatar.cc/100?img=5",
  },
];

const EmployeeSelection = () => {
  const navigate = useNavigate();
   const [selected, setSelected] = useState(1);

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center p-5">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">

        <h2 className="text-2xl font-bold">Employee Selection</h2>

        <p className="text-gray-500 mb-6">
          Who served you?
        </p>

        <div className="relative mb-5">
          <Search
            className="absolute left-3 top-3 text-gray-400"
            size={18}
          />

          <input
            placeholder="Search employee..."
            className="w-full border rounded-lg py-2 pl-10 pr-4"
          />
        </div>

        <div className="space-y-3">

          {employees.map((employee) => (

            <div
              key={employee.id}
              onClick={() => setSelected(employee.id)}
              className={`border rounded-xl p-3 flex items-center justify-between cursor-pointer ${
                selected === employee.id
                  ? "border-blue-500 bg-blue-50"
                  : ""
              }`}
            >

              <div className="flex items-center gap-3">

                <img
                  src={employee.image}
                  className="w-12 h-12 rounded-full"
                />

                <div>
                  <h3 className="font-semibold">
                    {employee.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {employee.position}
                  </p>

                  <p className="text-xs text-gray-400">
                    {employee.department}
                  </p>

                </div>

              </div>

              <input
                type="radio"
                checked={selected === employee.id}
                readOnly
              />

            </div>

          ))}

        </div>

        <div className="flex justify-between mt-8">

          <button className="border rounded-lg px-6 py-2"
          onClick={() => navigate("/service-selection")}>
            Back
          </button>

          <button className="bg-blue-600 text-white rounded-lg px-8 py-2"
          onClick={() => navigate("/feedback")}
          >
            Next
          </button>

        </div>

      </div>
    </div>
  );

}

export default EmployeeSelection
