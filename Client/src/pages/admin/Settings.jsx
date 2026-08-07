import React from 'react'
import { useState } from "react";
import {
  User,
  Bell,
  Shield,
  Save,
} from "lucide-react";

function Settings() {
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="space-y-6 max-w-5xl">

      <div>
        <h1 className="text-2xl sm:text-3xl font-bold">
          Settings
        </h1>

        <p className="text-gray-500">
          Manage your account and system settings
        </p>
      </div>

      {/* Profile */}

      <div className="bg-white border rounded-2xl p-5 sm:p-6">

        <div className="flex items-center gap-3 mb-6">

          <div className="bg-blue-50 p-3 rounded-xl">
            <User className="text-blue-600" />
          </div>

          <div>
            <h2 className="font-semibold text-lg">
              Profile Settings
            </h2>

            <p className="text-sm text-gray-500">
              Manage administrator information
            </p>
          </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

          <div>
            <label className="text-sm font-medium">
              Full Name
            </label>

            <input
              defaultValue="System Administrator"
              className="w-full border rounded-xl p-3 mt-2"
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              defaultValue="admin@example.com"
              className="w-full border rounded-xl p-3 mt-2"
            />
          </div>

        </div>

      </div>

      {/* Notifications */}

      <div className="bg-white border rounded-2xl p-5 sm:p-6">

        <div className="flex items-center gap-3">

          <div className="bg-blue-50 p-3 rounded-xl">
            <Bell className="text-blue-600" />
          </div>

          <div>
            <h2 className="font-semibold text-lg">
              Notifications
            </h2>

            <p className="text-sm text-gray-500">
              Configure system notifications
            </p>
          </div>

        </div>

        <div className="flex justify-between items-center mt-6">

          <div>
            <p className="font-medium">
              Email Notifications
            </p>

            <p className="text-sm text-gray-500">
              Receive notifications about new feedback
            </p>
          </div>

          <button
            onClick={() => setNotifications(!notifications)}
            className={`w-12 h-6 rounded-full transition ${
              notifications
                ? "bg-blue-600"
                : "bg-gray-300"
            }`}
          >

            <span
              className={`block w-5 h-5 bg-white rounded-full transition ${
                notifications
                  ? "translate-x-6"
                  : "translate-x-1"
              }`}
            />

          </button>

        </div>

      </div>

      {/* Security */}

      <div className="bg-white border rounded-2xl p-5 sm:p-6">

        <div className="flex items-center gap-3 mb-6">

          <div className="bg-blue-50 p-3 rounded-xl">
            <Shield className="text-blue-600" />
          </div>

          <div>
            <h2 className="font-semibold text-lg">
              Security
            </h2>

            <p className="text-sm text-gray-500">
              Manage your account security
            </p>
          </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

          <input
            type="password"
            placeholder="Current password"
            className="border rounded-xl p-3"
          />

          <input
            type="password"
            placeholder="New password"
            className="border rounded-xl p-3"
          />

        </div>

      </div>

      <button className="bg-blue-600 text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-blue-700">

        <Save size={18} />

        Save Changes

      </button>

    </div>
  );
}

export default Settings;