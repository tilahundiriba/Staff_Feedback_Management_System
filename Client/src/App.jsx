import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CustomerLayout from "./layouts/CustomerLayout";
import AdminLayout from "./layouts/AdminLayout";

import Welcome from "./pages/customer/Welcome";
import CustomerInfo from "./pages/customer/CustomerInfo";
import Dashboard from "./pages/admin/Dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Customer */}

        <Route element={<CustomerLayout />}>
          <Route path="/" element={<Welcome />} />
          <Route path="/customer-info" element={<CustomerInfo />} />
        </Route>

        {/* Admin */}

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
