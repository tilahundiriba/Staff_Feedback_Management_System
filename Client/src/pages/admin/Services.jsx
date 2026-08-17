import React from 'react'
import { useEffect, useState } from "react";
import {
  Briefcase,
  Plus,
  MoreVertical,
} from "lucide-react";

function Services() {
    const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/services"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch services");
        }

        const data = await response.json();

        setServices(data);
      } catch (error) {
        console.error(error);
        setError("Unable to load services");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const filteredServices = services.filter((service) => {
    const searchText = search.toLowerCase();

    return (
      service.service_id?.toLowerCase().includes(searchText) ||
      service.service_name?.toLowerCase().includes(searchText) ||
      service.department?.toLowerCase().includes(searchText) ||
      service.description?.toLowerCase().includes(searchText)
    );
  });

  if (loading) {
    return (
      <div className="p-6 text-center">
        <p className="text-gray-500">Loading services...</p>
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
return (
    <div className="w-full p-4 sm:p-6">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Services
        </h1>

        <p className="text-gray-500 mt-1">
          Manage organization services
        </p>
      </div>

      {/* Search */}
      <div className="flex justify-between mb-6">
        <input
          type="text"
          placeholder="Search services..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:max-w-md border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
         <button className="bg-blue-600 text-white px-5 py-3 rounded-xl flex items-center justify-center gap-2">
          <Plus size={20} />
          Add Service
        </button>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-6 py-4">ID</th>
                <th className="text-left px-6 py-4">Service</th>
                <th className="text-left px-6 py-4">Department</th>
                <th className="text-left px-6 py-4">Description</th>
                <th className="text-left px-6 py-4">Status</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {filteredServices.map((service) => (
                <tr key={service.service_id}>
                  <td className="px-6 py-4 font-medium text-blue-600">
                    {service.service_id}
                  </td>

                  <td className="px-6 py-4 font-medium">
                    {service.service_name}
                  </td>

                  <td className="px-6 py-4">
                    {service.department}
                  </td>

                  <td className="px-6 py-4">
                    {service.description}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${
                        service.status
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {service.status ? "Active" : "Inactive"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden space-y-4">
        {filteredServices.map((service) => (
          <div
            key={service.service_id}
            className="bg-white rounded-xl shadow-sm p-5"
          >
            <div className="flex justify-between gap-3">
              <div>
                <h2 className="font-semibold text-gray-800">
                  {service.service_name}
                </h2>

                <p className="text-sm text-blue-600 mt-1">
                  {service.service_id}
                </p>
              </div>

              <span
                className={`h-fit px-3 py-1 rounded-full text-xs ${
                  service.status
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {service.status ? "Active" : "Inactive"}
              </span>
            </div>

            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <p>
                <strong>Department:</strong>{" "}
                {service.department}
              </p>

              <p>
                <strong>Description:</strong>{" "}
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {filteredServices.length === 0 && (
        <div className="bg-white rounded-xl p-10 text-center">
          <p className="text-gray-500">
            No services found.
          </p>
        </div>
      )}
    </div>
  );
}

export default Services;