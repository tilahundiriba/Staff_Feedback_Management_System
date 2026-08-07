import React from 'react'
import {
  Folder,
  Plus,
  MoreVertical,
} from "lucide-react";

const categories = [
  {
    name: "Customer Service",
    description: "Services related to customer assistance",
    services: 5,
    feedback: 650,
  },
  {
    name: "Insurance",
    description: "Insurance related services",
    services: 8,
    feedback: 430,
  },
  {
    name: "Support",
    description: "Customer support and assistance",
    services: 4,
    feedback: 510,
  },
];

function Categories() {
  return (
    <div className="space-y-6">

      <div className="flex flex-col sm:flex-row justify-between gap-4">

        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">
            Categories
          </h1>

          <p className="text-gray-500">
            Organize your organization's services
          </p>
        </div>

        <button className="bg-blue-600 text-white px-5 py-3 rounded-xl flex items-center justify-center gap-2">
          <Plus size={20} />
          Add Category
        </button>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

        {categories.map((category) => (

          <div
            key={category.name}
            className="bg-white border rounded-2xl p-5 shadow-sm"
          >

            <div className="flex justify-between">

              <div className="bg-blue-50 p-3 rounded-xl">
                <Folder className="text-blue-600" />
              </div>

              <button>
                <MoreVertical />
              </button>

            </div>

            <h3 className="font-semibold text-lg mt-5">
              {category.name}
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              {category.description}
            </p>

            <div className="grid grid-cols-2 gap-3 mt-5">

              <div className="bg-gray-50 rounded-xl p-3">
                <p className="text-xs text-gray-500">
                  Services
                </p>

                <p className="font-bold text-lg">
                  {category.services}
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-3">
                <p className="text-xs text-gray-500">
                  Feedback
                </p>

                <p className="font-bold text-lg">
                  {category.feedback}
                </p>
              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Categories;