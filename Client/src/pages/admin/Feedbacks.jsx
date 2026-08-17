import { useEffect, useState } from "react";

function Feedback() {
  const [feedback, setFeedback] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/feedback"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch feedback");
        }

        const data = await response.json();

        setFeedback(data);
      } catch (error) {
        console.error(error);
        setError("Unable to load feedback");
      } finally {
        setLoading(false);
      }
    };

    fetchFeedback();
  }, []);

  // Search
  const filteredFeedback = feedback.filter((item) => {
    const searchText = search.toLowerCase();

    return (
  String(item.feedback_id ?? "")
      .toLowerCase()
      .includes(searchText) ||

    String(item.employee_name ?? "")
      .toLowerCase()
      .includes(searchText) ||

    String(item.customer_id ?? "")
      .toLowerCase()
      .includes(searchText) ||

    String(item.service_name ?? "")
      .toLowerCase()
      .includes(searchText) ||

    String(item.category_name ?? "")
      .toLowerCase()
      .includes(searchText) ||

    String(item.comment ?? "")
      .toLowerCase()
      .includes(searchText)
    );
  });

  if (loading) {
    return (
      <div className="p-6 text-center">
        <p className="text-gray-500">
          Loading feedback...
        </p>
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

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Feedback
        </h1>

        <p className="text-gray-500 mt-1">
          View customer feedback
        </p>
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search feedback..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:max-w-md border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block bg-white rounded-xl shadow-sm overflow-x-auto">

        <table className="w-full">

          <thead className="bg-gray-50">
            <tr>

              <th className="text-left px-5 py-4">
                Feedback ID
              </th>

              <th className="text-left px-5 py-4">
                Employee
              </th>

              <th className="text-left px-5 py-4">
                Customer ID
              </th>

              <th className="text-left px-5 py-4">
                Service
              </th>

              <th className="text-left px-5 py-4">
                Category
              </th>

              <th className="text-left px-5 py-4">
                Rating
              </th>

              <th className="text-left px-5 py-4">
                Comment
              </th>

            </tr>
          </thead>

          <tbody className="divide-y">

            {filteredFeedback.map((item) => (

              <tr key={item.feedback_id}>

                <td className="px-5 py-4 text-blue-600 font-medium">
                  {item.feedback_id}
                </td>

                <td className="px-5 py-4">
                  {item.employee_name}
                </td>

                <td className="px-5 py-4">
                  {item.customer_id}
                </td>

                <td className="px-5 py-4">
                  {item.service_name}
                </td>

                <td className="px-5 py-4">
                  {item.category_name}
                </td>

                <td className="px-5 py-4">
                  <span className="text-yellow-500">
                    {"★".repeat(item.rating)}
                  </span>
                </td>

                <td className="px-5 py-4 max-w-xs">
                  {item.comment}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden space-y-4">

        {filteredFeedback.map((item) => (

          <div
            key={item.feedback_id}
            className="bg-white rounded-xl shadow-sm p-5"
          >

            <div className="flex justify-between gap-3">

              <div>

                <h2 className="font-semibold text-gray-800">
                  {item.employee_name}
                </h2>

                <p className="text-sm text-blue-600 mt-1">
                  {item.feedback_id}
                </p>

              </div>

              <span className="text-yellow-500 whitespace-nowrap">
                {"★".repeat(item.rating)}
              </span>

            </div>

            <div className="mt-4 space-y-2 text-sm">

              <p>
                <strong>Customer ID:</strong>{" "}
                {item.customer_id}
              </p>

              <p>
                <strong>Service:</strong>{" "}
                {item.service_name}
              </p>

              <p>
                <strong>Category:</strong>{" "}
                {item.category_name}
              </p>

              <p className="text-gray-600">
                <strong>Comment:</strong>{" "}
                {item.comment}
              </p>

            </div>

          </div>

        ))}

      </div>

      {/* Empty state */}
      {filteredFeedback.length === 0 && (
        <div className="bg-white rounded-xl p-10 text-center">
          <p className="text-gray-500">
            No feedback found.
          </p>
        </div>
      )}

    </div>
  );
}

export default Feedback;