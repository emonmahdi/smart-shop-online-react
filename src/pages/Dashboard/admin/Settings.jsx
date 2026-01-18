import { useState } from "react";
import {
  FaUser,
  FaLock,
  FaBell,
  FaPalette,
  FaTrash,
} from "react-icons/fa";

export default function Settings() {
  const [settings, setSettings] = useState({
    name: "Demo User",
    email: "demo@gmail.com",
    theme: "light",
    emailNotification: true,
    orderNotification: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="p-4 md:p-6 bg-gray-50 min-h-screen space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Settings</h1>

      {/* ================= Account ================= */}
      <div className="bg-white rounded-xl shadow p-5 space-y-4">
        <h2 className="font-semibold flex items-center gap-2">
          <FaUser /> Account Settings
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={settings.name}
            onChange={handleChange}
            className="border rounded-lg px-4 py-2"
            placeholder="Full Name"
          />
          <input
            type="email"
            value={settings.email}
            disabled
            className="border rounded-lg px-4 py-2 bg-gray-100"
          />
        </div>

        <button className="bg-primary text-white px-6 py-2 rounded-lg">
          Save Changes
        </button>
      </div>

      {/* ================= Password ================= */}
      <div className="bg-white rounded-xl shadow p-5 space-y-4">
        <h2 className="font-semibold flex items-center gap-2">
          <FaLock /> Security
        </h2>

        <div className="grid sm:grid-cols-3 gap-4">
          <input
            type="password"
            placeholder="Old Password"
            className="border rounded-lg px-4 py-2"
          />
          <input
            type="password"
            placeholder="New Password"
            className="border rounded-lg px-4 py-2"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="border rounded-lg px-4 py-2"
          />
        </div>

        <button className="bg-secondary text-white px-6 py-2 rounded-lg">
          Update Password
        </button>
      </div>

      {/* ================= Preferences ================= */}
      <div className="bg-white rounded-xl shadow p-5 space-y-4">
        <h2 className="font-semibold flex items-center gap-2">
          <FaPalette /> Preferences
        </h2>

        <div className="flex items-center justify-between">
          <span>Theme</span>
          <select
            name="theme"
            value={settings.theme}
            onChange={handleChange}
            className="border rounded-lg px-4 py-2"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
      </div>

      {/* ================= Notifications ================= */}
      <div className="bg-white rounded-xl shadow p-5 space-y-4">
        <h2 className="font-semibold flex items-center gap-2">
          <FaBell /> Notifications
        </h2>

        <div className="flex items-center justify-between">
          <span>Email Notifications</span>
          <input
            type="checkbox"
            name="emailNotification"
            checked={settings.emailNotification}
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center justify-between">
          <span>Order Updates</span>
          <input
            type="checkbox"
            name="orderNotification"
            checked={settings.orderNotification}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* ================= Danger Zone ================= */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-5 space-y-4">
        <h2 className="font-semibold text-red-700 flex items-center gap-2">
          <FaTrash /> Danger Zone
        </h2>

        <button className="bg-red-600 text-white px-6 py-2 rounded-lg">
          Delete Account
        </button>
      </div>
    </div>
  );
}
