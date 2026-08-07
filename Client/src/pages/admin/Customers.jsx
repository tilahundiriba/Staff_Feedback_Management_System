import React from 'react'


import { Search, Users } from "lucide-react";
import { useState } from "react";

const customers = [
  {
    name: "Abebe Kebede",
    phone: "+251 911 123456",
    email: "abebe@example.com",
    type: "Individual",
    feedback: 5,
  },
  {
    name: "Sara Ahmed",
    phone: "+251 922 456789",
    email: "sara@example.com",
    type: "Business",
    feedback: 4,
  },
  {
    name: "Michael Brown",
    phone: "+251 933 987654",
    email: "michael@example.com",
    type: "Individual",
    feedback: 5,
  },
];

function Customers() {
  const [search, setSearch] = useState("");

  const filtered = customers.filter((customer) =>
    customer.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl sm:text-3xl font-bold">
          Customers
        </h1>

        <p className="text-gray-500">
          View customers and their feedback history
        </p>
      </div>

      <div className="bg-white p-4 rounded-2xl border">

        <div className="relative max-w-md">

          <Search
            size={20}
            className="absolute left-3 top-3 text-gray-400"
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search customers..."
            className="w-full border rounded-xl p-3 pl-10"
          />

        </div>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">

        {filtered.map((customer) => (

          <div
            key={customer.email}
            className="bg-white border rounded-2xl p-5 shadow-sm"
          >

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Users className="text-blue-600" />
              </div>

              <div>
                <h3 className="font-semibold">
                  {customer.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {customer.type}
                </p>
              </div>

            </div>

            <div className="mt-5 space-y-2 text-sm">

              <p>{customer.phone}</p>

              <p className="text-gray-500">
                {customer.email}
              </p>

              <p className="text-yellow-500">
                ★ {customer.feedback} Rating
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Customers;