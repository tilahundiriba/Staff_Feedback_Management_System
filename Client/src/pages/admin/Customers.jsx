import React from 'react'

import { useEffect, useState } from "react";
import { Search, Users } from "lucide-react";




function Customers() {
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/customers"
        );

        const data = await response.json();

        setCustomers(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  const filteredCustomers = customers.filter((customer) => {
    const searchText = search.toLowerCase();

    return (
      customer.customer_id?.toLowerCase().includes(searchText) ||
      customer.full_name?.toLowerCase().includes(searchText) ||
      customer.phone?.toLowerCase().includes(searchText) ||
      customer.email?.toLowerCase().includes(searchText) ||
      customer.customer_type?.toLowerCase().includes(searchText)
    );
  });

  if (loading) {
    return (
      <div className="p-6 text-center">
        Loading customers...
      </div>
    );
  }


  return (
   <div className="w-full p-4 sm:p-6">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold">
          Customers
        </h1>

        <p className="text-gray-500 mt-1">
          View customer information
        </p>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search customers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:max-w-md border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="hidden md:block bg-white rounded-xl shadow-sm overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-6 py-4">ID</th>
              <th className="text-left px-6 py-4">Name</th>
              <th className="text-left px-6 py-4">Phone</th>
              <th className="text-left px-6 py-4">Email</th>
              <th className="text-left px-6 py-4">Type</th>
              <th className="text-left px-6 py-4">Age</th>
              <th className="text-left px-6 py-4">Gender</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {filteredCustomers.map((customer) => (
              <tr key={customer.customer_id}>
                <td className="px-6 py-4 text-blue-600 font-medium">
                  {customer.customer_id}
                </td>

                <td className="px-6 py-4">
                  {customer.email}
                </td>

                <td className="px-6 py-4">
                  {customer.customer_type}
                </td>

                <td className="px-6 py-4">
                  {customer.age_category}
                </td>

                <td className="px-6 py-4">
                  {customer.gender}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden space-y-4">
        {filteredCustomers.map((customer) => (
          <div
            key={customer.customer_id}
            className="bg-white rounded-xl shadow-sm p-5"
          >
            <div className="flex justify-between">
              <div>
                <h2 className="font-semibold">
                  {customer.full_name}
                </h2>

                <p className="text-sm text-blue-600">
                  {customer.customer_id}
                </p>
              </div>
            </div>

            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <p>
                <strong>Phone:</strong> {customer.phone}
              </p>

              <p>
                <strong>Email:</strong> {customer.email}
              </p>

              <p>
                <strong>Type:</strong> {customer.customer_type}
              </p>

              <p>
                <strong>Age:</strong> {customer.age_category}
              </p>

              <p>
                <strong>Gender:</strong> {customer.gender}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Customers;