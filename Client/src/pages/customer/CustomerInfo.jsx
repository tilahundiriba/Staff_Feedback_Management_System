import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
const CustomerInfo = () => {
  const navigate = useNavigate();
  const [customerType, setCustomerType] = useState("Individual");
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-5">
      <div className="w-full max-w-lg md:max-w-4xl bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800">
          {t("customerInformation")}
        </h2>

        <p className="text-gray-500 mt-1">
          {t("customerInformationDescription")}
        </p>

        <div className="mt-8 space-y-5">
          <div>
            <label className="font-medium">
              {t("fullName")} <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="mt-2 w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="font-medium">
              {t("phoneNumber")} <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              placeholder="Enter your phone number"
              className="mt-2 w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="font-medium">{t("email")} ({t("optional")})</label>

            <input
              type="email"
              placeholder="Enter your email"
              className="mt-2 w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="font-medium">
              {t("customerType")} <span className="text-red-500">*</span>
            </label>

            <div className="mt-3 space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="customerType"
                  value="individual"
                  checked={customerType === "individual"}
                  onChange={(e) => setCustomerType(e.target.value)}
                />
                {t("individual")}
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="customerType"
                  value="business"
                  checked={customerType === "business"}
                  onChange={(e) => setCustomerType(e.target.value)}
                />
                {t("business")}
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="customerType" value="visitor"
                   checked={customerType === "visitor"}
                  onChange={(e) => setCustomerType(e.target.value)}/>
                {t("visitor")}
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-10">
          <button className="border px-6 py-3 rounded-lg hover:bg-gray-100">
            
            {t("cancel")}
          </button>

          <button
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
            onClick={() => navigate("/service-selection")}
          >
            
             {t("next")}
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {[1, 2, 3, 4, 5].map((step) => (
            <div
              key={step}
              className={`w-8 h-8 rounded-full flex items-center justify-center border
                ${step === 2 ? "bg-blue-600 text-white" : "bg-white"}`}
            >
              {step}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;
