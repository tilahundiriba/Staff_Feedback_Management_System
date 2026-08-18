import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./i18n/i18n.js";
import CustomerLayout from "./layouts/CustomerLayout.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";
import AddEmployee from "./pages/admin/AddEmployee.jsx";
import Welcome from "./pages/customer/Welcome.jsx";
import CustomerInfo from "./pages/customer/CustomerInfo.jsx";
import Dashboard from "./pages/admin/Dashboard.jsx";
import ServiceSelection from "./pages/customer/ServiceSelection.jsx";
import EmployeeSelection from "./pages/customer/EmployeeSelection.jsx";
import Feedback from "./pages/customer/Feedback.jsx";
import ThankYou from "./pages/customer/ThankYou.jsx";
import Employees from "./pages/admin/Employees.jsx";
import Customers from "./pages/admin/Customers.jsx";
import Services from "./pages/admin/Services.jsx";
import Categories from "./pages/admin/Categories.jsx";
import Reports from "./pages/admin/Reports.jsx";
import Analytics from "./pages/admin/Analytics.jsx";
import Settings from "./pages/admin/Settings.jsx";
import Feedbacks from "./pages/admin/Feedbacks.jsx";
import EmployeeRatings from "./pages/admin/EmployeeRatings";
import Login from "./pages/auth/Login.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Customer */}

        <Route element={<CustomerLayout />}>
          <Route path="/" element={<Welcome />} />
          <Route path="/customer-info" element={<CustomerInfo />} />
          <Route path="/service-selection" element={<ServiceSelection />} />
          <Route path="/employee-selection" element={<EmployeeSelection />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/thankyou" element={<ThankYou />} />
        </Route>

        {/* Admin */}
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="employees" element={<Employees />} />
          <Route path="addEmployees" element={<AddEmployee />} />
          <Route path="customers" element={<Customers />} />
          <Route path="employees/:id/ratings" element={<EmployeeRatings />} />
          <Route path="services" element={<Services />} />

          <Route path="categories" element={<Categories />} />

          <Route path="feedback" element={<Feedbacks />} />

          <Route path="reports" element={<Reports />} />

          <Route path="analytics" element={<Analytics />} />

          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
