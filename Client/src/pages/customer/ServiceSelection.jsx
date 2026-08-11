import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Briefcase,
  ShieldCheck,
  FileText,
  Headphones,
  CreditCard,
  Landmark,
  CircleHelp,
  ChevronDown,
} from "lucide-react";

const services = [
  {
    icon: <Briefcase size={18} />,
    name: "Account Opening",
  },
  {
    icon: <ShieldCheck size={18} />,
    name: "Policy Renewal",
  },
  {
    icon: <FileText size={18} />,
    name: "Claim Processing",
  },
  {
    icon: <Headphones size={18} />,
    name: "Customer Support",
  },
  {
    icon: <CreditCard size={18} />,
    name: "Premium Payment",
  },
  {
    icon: <Landmark size={18} />,
    name: "Loan Processing",
  },
  {
    icon: <CircleHelp size={18} />,
    name: "Information & Inquiry",
  },
  {
    icon: <CircleHelp size={18} />,
    name: "Other Service",
  },
];
const ServiceSelection = () => {
    const navigate = useNavigate();
 const [selected, setSelected] = useState("Account Opening");

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-5">

      <div className="w-full max-w-md md:max-w-4xl bg-white rounded-2xl shadow-lg p-8">

        <h2 className="text-2xl font-bold">
          Service Selection
        </h2>

        <p className="text-gray-500 mt-1">
          Which service did you receive?
        </p>

        <div className="border rounded-xl overflow-hidden mt-8">

          {services.map((service) => (

            <div
              key={service.name}
              onClick={() => setSelected(service.name)}
              className={`flex justify-between items-center p-4 cursor-pointer border-b last:border-b-0 transition
              ${
                selected === service.name
                  ? "bg-blue-50"
                  : "hover:bg-gray-50"
              }`}
            >

              <div className="flex items-center gap-3">

                <span className="text-blue-600">
                  {service.icon}
                </span>

                <span>{service.name}</span>

              </div>

              <ChevronDown size={16} />

            </div>

          ))}

        </div>

        <div className="flex justify-between mt-10">

          <button className="border px-6 py-3 rounded-lg hover:bg-gray-100"
          onClick={() => navigate("/customer-info")}>
            Back
          </button>

          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
          onClick={() => navigate("/employee-selection")}>
            Next
          </button>

        </div>

        <div className="flex justify-center gap-3 mt-8">

          {[1, 2, 3, 4, 5].map((step) => (

            <div
              key={step}
              className={`w-8 h-8 rounded-full flex items-center justify-center border
              ${
                step === 3
                  ? "bg-blue-600 text-white"
                  : "bg-white"
              }`}
            >
              {step}
            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default ServiceSelection
