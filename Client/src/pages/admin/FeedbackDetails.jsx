import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Star } from "lucide-react";

function FeedbackDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [feedback, setFeedback] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/feedback/${id}`
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
  }, [id]);

  if (loading) {
    return (
      <div className="w-full p-6 text-center">
        <p className="text-gray-500">Loading feedback...</p>
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

  if (!feedback) {
    return (
      <div className="w-full p-6 text-center">
        <p className="text-gray-500">Feedback not found.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6">

      {/* Back Button */}
      <button
        onClick={() => navigate("/admin/feedback")}
        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-6"
      >
        <ArrowLeft size={20} />
        Back to Feedback
      </button>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Feedback Details
        </h1>

        <p className="text-gray-500 mt-1">
          View complete feedback information
        </p>
      </div>

      {/* Feedback Card */}
      <div className="bg-white rounded-2xl shadow-sm p-5 sm:p-8">

        {/* Employee */}
        <div className="border-b pb-6">
          <p className="text-sm text-gray-500">
            Employee
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-1">
            {feedback.employee_name}
          </h2>

          <p className="text-sm text-blue-600 mt-1">
            {feedback.employee_id}
          </p>
        </div>

        {/* Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6 border-b">

          <div>
            <p className="text-sm text-gray-500">
              Feedback ID
            </p>

            <p className="font-medium text-gray-800 mt-1">
              {feedback.feedback_id}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Customer ID
            </p>

            <p className="font-medium text-gray-800 mt-1">
              {feedback.customer_id}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Service
            </p>

            <p className="font-medium text-gray-800 mt-1">
              {feedback.service_name}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Category
            </p>

            <p className="font-medium text-gray-800 mt-1">
              {feedback.category_name}
            </p>
          </div>

        </div>

        {/* Rating */}
        <div className="py-6 border-b">

          <p className="text-sm text-gray-500 mb-2">
            Rating
          </p>

          <div className="flex items-center gap-2">

            <div className="flex text-yellow-400">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={24}
                  fill={
                    index < feedback.rating
                      ? "currentColor"
                      : "none"
                  }
                />
              ))}
            </div>

            <span className="font-semibold text-gray-700">
              {feedback.rating} / 5
            </span>

          </div>

        </div>

        {/* Comment */}
        <div className="pt-6">

          <p className="text-sm text-gray-500 mb-2">
            Comment
          </p>

          <div className="bg-gray-50 rounded-xl p-4 text-gray-700">
            {feedback.comment || "No comment provided."}
          </div>

        </div>

      </div>
    </div>
  );
}

export default FeedbackDetails;