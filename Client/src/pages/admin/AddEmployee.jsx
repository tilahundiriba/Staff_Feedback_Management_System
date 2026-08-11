import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Phone,
  Briefcase,
  Building2,
  Save,
  X,
  ArrowLeft,
} from "lucide-react";

function AddEmployee() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    department: "",
    status: "active",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove error when user starts typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.position.trim()) {
      newErrors.position = "Position is required";
    }

    if (!formData.department) {
      newErrors.department = "Department is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    console.log("Employee data:", formData);

    // Later:
    // POST formData to Node.js backend

    navigate("/admin/employees");
  };

  const handleCancel = () => {
    navigate("/admin/employees");
  };

  return (
    <div className="min-h-screen bg-slate-100 p-4 sm:p-6 lg:p-8">

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

          <div>
            <button
              type="button"
              onClick={handleCancel}
              className="flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-3 transition"
            >
              <ArrowLeft size={18} />
              Back to Employees
            </button>

            <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
              Add Employee
            </h1>

            <p className="text-slate-500 mt-1 text-sm sm:text-base">
              Add a new employee to your organization.
            </p>
          </div>

        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200">

          <form onSubmit={handleSubmit}>

            {/* Personal Information */}
            <div className="p-5 sm:p-6 lg:p-8 border-b border-slate-200">

              <div className="flex items-center gap-3 mb-6">

                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                  <User
                    size={21}
                    className="text-blue-600"
                  />
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-slate-800">
                    Personal Information
                  </h2>

                  <p className="text-sm text-slate-500">
                    Enter the employee's basic information.
                  </p>
                </div>

              </div>

              {/* Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* First Name */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    First Name
                    <span className="text-red-500 ml-1">*</span>
                  </label>

                  <div className="relative">

                    <User
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter first name"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                        errors.firstName
                          ? "border-red-500"
                          : "border-slate-300"
                      } outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20`}
                    />

                  </div>

                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Last Name
                    <span className="text-red-500 ml-1">*</span>
                  </label>

                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter last name"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.lastName
                        ? "border-red-500"
                        : "border-slate-300"
                    } outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20`}
                  />

                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>

              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">

                {/* Email */}
                <div>

                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                    <span className="text-red-500 ml-1">*</span>
                  </label>

                  <div className="relative">

                    <Mail
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="employee@example.com"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                        errors.email
                          ? "border-red-500"
                          : "border-slate-300"
                      } outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20`}
                    />

                  </div>

                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email}
                    </p>
                  )}

                </div>

                {/* Phone */}
                <div>

                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number
                    <span className="text-red-500 ml-1">*</span>
                  </label>

                  <div className="relative">

                    <Phone
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+251 9XX XXX XXX"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                        errors.phone
                          ? "border-red-500"
                          : "border-slate-300"
                      } outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20`}
                    />

                  </div>

                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.phone}
                    </p>
                  )}

                </div>

              </div>

            </div>

            {/* Work Information */}
            <div className="p-5 sm:p-6 lg:p-8">

              <div className="flex items-center gap-3 mb-6">

                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Briefcase
                    size={21}
                    className="text-blue-600"
                  />
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-slate-800">
                    Work Information
                  </h2>

                  <p className="text-sm text-slate-500">
                    Enter the employee's organization information.
                  </p>
                </div>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* Position */}
                <div>

                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Position
                    <span className="text-red-500 ml-1">*</span>
                  </label>

                  <div className="relative">

                    <Briefcase
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      placeholder="e.g. Customer Service Officer"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                        errors.position
                          ? "border-red-500"
                          : "border-slate-300"
                      } outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20`}
                    />

                  </div>

                  {errors.position && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.position}
                    </p>
                  )}

                </div>

                {/* Department */}
                <div>

                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Department
                    <span className="text-red-500 ml-1">*</span>
                  </label>

                  <div className="relative">

                    <Building2
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                    />

                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                        errors.department
                          ? "border-red-500"
                          : "border-slate-300"
                      } bg-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20`}
                    >
                      <option value="">
                        Select department
                      </option>

                      <option value="customer-service">
                        Universal
                      </option>

                      <option value="finance">
                        Ash tesh
                      </option>

                      <option value="human-resource">
                        Betoch limat Astedader
                      </option>

                      <option value="information-technology">
                        Information Technology
                      </option>

                      <option value="marketing">
                        Gabiwoch Biro
                      </option>

                      <option value="operations">
                        CBE
                      </option>
                    </select>

                  </div>

                  {errors.department && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.department}
                    </p>
                  )}

                </div>

              </div>

              {/* Status */}
              <div className="mt-5">

                <label className="block text-sm font-medium text-slate-700 mb-3">
                  Employee Status
                </label>

                <div className="flex flex-col sm:flex-row gap-4">

                  <label className="flex items-center gap-2 cursor-pointer">

                    <input
                      type="radio"
                      name="status"
                      value="active"
                      checked={formData.status === "active"}
                      onChange={handleChange}
                      className="w-4 h-4 accent-blue-600"
                    />

                    <span className="text-sm text-slate-700">
                      Active
                    </span>

                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">

                    <input
                      type="radio"
                      name="status"
                      value="inactive"
                      checked={formData.status === "inactive"}
                      onChange={handleChange}
                      className="w-4 h-4 accent-blue-600"
                    />

                    <span className="text-sm text-slate-700">
                      Inactive
                    </span>

                  </label>

                </div>

              </div>

            </div>

            {/* Buttons */}
            <div className="px-5 sm:px-6 lg:px-8 py-5 bg-slate-50 border-t border-slate-200 rounded-b-2xl">

              <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3">

                <button
                  type="button"
                  onClick={handleCancel}
                  className="
                    w-full
                    sm:w-auto
                    px-6
                    py-3
                    rounded-xl
                    border
                    border-slate-300
                    text-slate-600
                    font-medium
                    flex
                    items-center
                    justify-center
                    gap-2
                    hover:bg-white
                    transition
                  "
                >
                  <X size={18} />
                  Cancel
                </button>

                <button
                  type="submit"
                  className="
                    w-full
                    sm:w-auto
                    px-6
                    py-3
                    rounded-xl
                    bg-blue-600
                    text-white
                    font-medium
                    flex
                    items-center
                    justify-center
                    gap-2
                    hover:bg-blue-700
                    transition
                    shadow-sm
                  "
                >
                  <Save size={18} />
                  Save Employee
                </button>

              </div>

            </div>

          </form>

        </div>

      </div>

    </div>
  );
}

export default AddEmployee;