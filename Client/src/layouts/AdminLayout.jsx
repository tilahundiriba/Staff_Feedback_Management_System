import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <div className="flex flex-col flex-1">

        <Navbar />

        <main className="flex-1 p-8 overflow-auto">

          <Outlet />

        </main>

      </div>

    </div>
  );
}

export default AdminLayout;