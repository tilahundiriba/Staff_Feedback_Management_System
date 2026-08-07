import React from 'react'


import {
  Briefcase,
  Plus,
  MoreVertical,
} from "lucide-react";

const services = [
  {
    name: "Account Opening",
    category: "Customer Service",
    feedback: 324,
    status: "Active",
  },
  {
    name: "Policy Renewal",
    category: "Insurance",
    feedback: 218,
    status: "Active",
  },
  {
    name: "Claim Processing",
    category: "Insurance",
    feedback: 186,
    status: "Active",
  },
  {
    name: "Customer Support",
    category: "Support",
    feedback: 450,
    status: "Active",
  },
];

function Services() {
  return (
    <div className="space-y-6">

      <div className="flex flex-col sm:flex-row justify-between gap-4">

        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">
            Services
          </h1>

          <p className="text-gray-500">
            Manage services provided by your organization
          </p>
        </div>

        <button className="bg-blue-600 text-white px-5 py-3 rounded-xl flex items-center justify-center gap-2">
          <Plus size={20} />
          Add Service
        </button>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">

        {services.map((service) => (

          <div
            key={service.name}
            className="bg-white border rounded-2xl p-5 shadow-sm"
          >

            <div className="flex justify-between">

              <div className="bg-blue-50 p-3 rounded-xl">
                <Briefcase className="text-blue-600" />
              </div>

              <button>
                <MoreVertical />
              </button>

            </div>

            <h3 className="font-semibold text-lg mt-5">
              {service.name}
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              {service.category}
            </p>

            <div className="flex justify-between mt-5">

              <span className="text-sm text-gray-500">
                {service.feedback} feedback
              </span>

              <span className="text-green-600 text-sm">
                {service.status}
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Services;