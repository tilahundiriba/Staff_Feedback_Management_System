import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Star } from "lucide-react";

function EmployeeRatings() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    const fetchRatings = async () => {

      try {

        const response = await fetch(
          `http://localhost:5000/api/employee-ratings/${id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch employee ratings");
        }

        const result = await response.json();

        setData(result);

      } catch (error) {

        console.error(error);

        setError(
          "Unable to load employee ratings"
        );

      } finally {

        setLoading(false);

      }
    };

    fetchRatings();

  }, [id]);


  if (loading) {
    return (
      <div className="w-full p-6 text-center">
        <p className="text-gray-500">
          Loading ratings...
        </p>
      </div>
    );
  }


  if (error) {
    return (
      <div className="w-full p-6">
        <div className="bg-red-50 text-red-600 p-4 rounded-lg">
          {error}
        </div>
      </div>
    );
  }


  if (!data) {
    return null;
  }


  const employee = data.employee;


  const fullName =
    `${employee.first_name ?? ""} ${employee.last_name ?? ""}`.trim();


  return (
    <div className="w-full max-w-5xl mx-auto p-4 sm:p-6">

      {/* Back */}
      <button
        onClick={() => navigate("/admin/employees")}
        className="
          flex
          items-center
          gap-2
          text-gray-600
          hover:text-blue-600
          mb-6
          transition
        "
      >
        <ArrowLeft size={20} />

        <span>
          Back to Employees
        </span>

      </button>


      {/* Employee Header */}
      <div className="bg-white rounded-2xl shadow-sm p-5 sm:p-8">

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">

          <div>

            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              {fullName}
            </h1>

            <p className="text-gray-500 mt-1">
              {employee.department}
            </p>

            <p className="text-sm text-blue-600 mt-1">
              {employee.employee_id}
            </p>

          </div>


          {/* Overall rating */}
          <div className="sm:text-right">

            <p className="text-sm text-gray-500">
              Overall Rating
            </p>

            <div className="flex items-center sm:justify-end gap-2 mt-1">

              <Star
                size={24}
                className="text-yellow-400"
                fill="currentColor"
              />

              <span className="text-2xl font-bold text-gray-800">
                {Number(employee.overall_rating).toFixed(2)}
              </span>

              <span className="text-gray-400">
                / 5
              </span>

            </div>

            <p className="text-xs text-gray-400 mt-1">
              {employee.total_ratings} ratings
            </p>

          </div>

        </div>

      </div>


      {/* Category Ratings */}
      <div className="bg-white rounded-2xl shadow-sm mt-5 p-5 sm:p-8">

        <div className="mb-6">

          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            Category Ratings
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            Average rating for each feedback category
          </p>

        </div>


        <div className="space-y-6">

          {data.categories.map((category) => {

            const rating =
              Number(category.average_rating) || 0;

            return (
              <div
                key={category.category_id}
                className="border-b border-gray-100 pb-5 last:border-0"
              >

                {/* Category name */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">

                  <div>

                    <h3 className="font-medium text-gray-800">
                      {category.category_name}
                    </h3>

                    <p className="text-xs text-gray-400">
                      {category.total_ratings} ratings
                    </p>

                  </div>


                  <div className="flex items-center gap-2">

                    {/* Stars */}
                    <div className="flex">

                      {[1, 2, 3, 4, 5].map((star) => (

                        <Star
                          key={star}
                          size={18}
                          className={
                            star <= Math.round(rating)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }
                          fill={
                            star <= Math.round(rating)
                              ? "currentColor"
                              : "none"
                          }
                        />

                      ))}

                    </div>

                    <span className="font-semibold text-gray-700">
                      {rating.toFixed(2)}
                    </span>

                  </div>

                </div>


                {/* Progress bar */}
                <div className="w-full bg-gray-100 rounded-full h-2 mt-3">

                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                    style={{
                      width: `${(rating / 5) * 100}%`,
                    }}
                  />

                </div>

              </div>
            );

          })}

        </div>

      </div>

    </div>
  );
}

export default EmployeeRatings;