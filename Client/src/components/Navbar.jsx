import React from 'react'
import {
  Bell,
  UserCircle
} from "lucide-react";

const Navbar = () => {
return (
    <header className="bg-white h-16 shadow-sm px-8 flex items-center justify-between">

      <h1 className="text-xl font-bold text-gray-700">
        Dashboard
      </h1>

      <div className="flex items-center gap-5">

        <button className="relative">

          <Bell size={22} />

          <span className="absolute -top-1 -right-1 bg-red-500 w-2 h-2 rounded-full"></span>

        </button>

        <div className="flex items-center gap-2">

          <UserCircle size={35} />

          <div>

            <h4 className="font-semibold">
              Admin
            </h4>

            <p className="text-sm text-gray-500">
              Administrator
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar
