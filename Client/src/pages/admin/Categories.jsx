import React from 'react'
import { useEffect, useState } from "react";
import {
  Folder,
  Plus,
  MoreVertical,
} from "lucide-react";


function Categories() {

   const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/categories"
        );

        const data = await response.json();

        setCategories(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const filteredCategories = categories.filter((category) => {
    const searchText = search.toLowerCase();

    return (
      category.category_id?.toLowerCase().includes(searchText) ||
      category.category_name?.toLowerCase().includes(searchText) ||
      category.description?.toLowerCase().includes(searchText)
    );
  });

  if (loading) {
    return (
      <div className="p-6 text-center">
        Loading categories...
      </div>
    );
  }
  <button className="bg-blue-600 text-white px-5 py-3 rounded-xl flex items-center justify-center gap-2">
          <Plus size={20} />
          Add Category
        </button>
 return (
    <div className="w-full p-4 sm:p-6">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold">
          Categories
        </h1>

        <p className="text-gray-500 mt-1">
          Manage feedback categories
        </p>
      </div>

      <div className="flex justify-between mb-6">
        <input
          type="text"
          placeholder="Search categories..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:max-w-md border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <button className="bg-blue-600 text-white px-5 py-3 rounded-xl flex items-center justify-center gap-2">
          <Plus size={20} />
          Add Category
        </button>
      </div>

      <div className="hidden md:block bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-6 py-4">ID</th>
              <th className="text-left px-6 py-4">Category</th>
              <th className="text-left px-6 py-4">Description</th>
              <th className="text-left px-6 py-4">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {filteredCategories.map((category) => (
              <tr key={category.category_id}>
                <td className="px-6 py-4 text-blue-600 font-medium">
                  {category.category_id}
                </td>

                <td className="px-6 py-4 font-medium">
                  {category.category_name}
                </td>

                <td className="px-6 py-4 text-gray-600">
                  {category.description}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      category.status
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {category.status ? "Active" : "Inactive"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden space-y-4">
        {filteredCategories.map((category) => (
          <div
            key={category.category_id}
            className="bg-white rounded-xl shadow-sm p-5"
          >
            <div className="flex justify-between">
              <div>
                <h2 className="font-semibold">
                  {category.category_name}
                </h2>

                <p className="text-sm text-blue-600">
                  {category.category_id}
                </p>
              </div>

              <span
                className={`h-fit px-3 py-1 rounded-full text-xs ${
                  category.status
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {category.status ? "Active" : "Inactive"}
              </span>
            </div>

            <p className="text-sm text-gray-600 mt-4">
              {category.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;