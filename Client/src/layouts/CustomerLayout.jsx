


import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer";

function CustomerLayout() {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">

      {/* Header */}

      <header className="bg-white shadow-sm">

        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center gap-3">

          <img
            src="/logo.png"
            alt="Logo"
            className="w-10 h-10"
          />

          <div>

            <h1 className="font-bold text-lg">
              ABC Organization
            </h1>

            <p className="text-sm text-gray-500">
              Staff Feedback System
            </p>

          </div>

        </div>

      </header>

      {/* Page */}

      <main className="flex-1 flex items-center justify-center p-6">

        <Outlet />

      </main>

      <Footer />

    </div>
  );
}

export default CustomerLayout;