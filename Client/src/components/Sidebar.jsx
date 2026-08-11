import React from 'react'
import {
  LayoutDashboard,
  Users,
  UserRound,
  Briefcase,
  FolderOpen,
  MessageSquare,
  BarChart3,
  Settings,
  LogOut
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menu = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/admin"
  },
  {
    title: "Employees",
    icon: Users,
    path: "/admin/employees"
  },
  {
    title: "Customers",
    icon: UserRound,
    path: "/admin/customers"
  },
  {
    title: "Services",
    icon: Briefcase,
    path: "/admin/services"
  },
  {
    title: "Categories",
    icon: FolderOpen,
    path: "/admin/categories"
  },
  {
    title: "Feedback",
    icon: MessageSquare,
    path: "/admin/feedback"
  },
  {
    title: "Reports",
    icon: BarChart3,
    path: "/admin/reports"
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/admin/settings"
  }
];
const Sidebar = () => {
 return (
    <aside className="w-72 bg-slate-900  shadow-lg flex flex-col ">

      <div className="h-20 flex items-center justify-center border-b">

        <h1 className="text-2xl font-bold text-blue-600">
          Feedback System
        </h1>

      </div>

      <nav className="flex-1 p-5 space-y-2 text-white">

        {menu.map((item) => {

          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-3 rounded-xl transition text-white ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-100 text-gray-700"
                }`
              }
            >
              <Icon size={20} />

              {item.title}
            </NavLink>
          );
        })}

      </nav>

      <div className="p-5 border-t">

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-100 text-red-600">

          <LogOut size={20} />

          Logout

        </button>

      </div>

    </aside>
  );
}

export default Sidebar
