import { useState } from "react";
import { FaUserEdit, FaLock, FaShoppingBag, FaHeart } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
 

const Profile = () => {
  const { user } = useAuth();

  const [profile, setProfile] = useState({
    name: user?.name || "John Doe",
    email: user?.email || "john@example.com",
    phone: "01700000000",
    address: "Dhaka, Bangladesh",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 space-y-6">
      {/* ================= Header ================= */}
      <div className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row gap-6 items-center">
        <img
          src="https://i.pravatar.cc/100"
          alt="profile"
          className="w-24 h-24 rounded-full border-4 border-primary"
        />

        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold">{profile.name}</h2>
          <p className="text-gray-500 text-sm">{profile.email}</p>
          <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full mt-2 inline-block">
            {user?.role || "user"}
          </span>
        </div>
      </div>

      {/* ================= Grid ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* ================= Edit Profile ================= */}
        <div className="md:col-span-2 bg-white rounded-xl shadow p-6">
          <div className="flex items-center gap-2 mb-4">
            <FaUserEdit className="text-primary" />
            <h3 className="font-semibold text-lg">Edit Profile</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary outline-none"
            />

            <input
              type="email"
              name="email"
              value={profile.email}
              disabled
              className="border rounded-lg px-3 py-2 bg-gray-100 cursor-not-allowed"
            />

            <input
              type="text"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary outline-none"
            />

            <input
              type="text"
              name="address"
              value={profile.address}
              onChange={handleChange}
              placeholder="Address"
              className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          <button className="mt-4 px-5 py-2 bg-primary text-white rounded-lg hover:opacity-90">
            Save Changes
          </button>
        </div>

        {/* ================= Right Info ================= */}
        <div className="space-y-4">
          {/* Orders */}
          <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4">
            <FaShoppingBag className="text-2xl text-primary" />
            <div>
              <p className="text-sm text-gray-500">Total Orders</p>
              <p className="font-semibold text-lg">12</p>
            </div>
          </div>

          {/* Wishlist */}
          <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4">
            <FaHeart className="text-2xl text-red-500" />
            <div>
              <p className="text-sm text-gray-500">Wishlist Items</p>
              <p className="font-semibold text-lg">5</p>
            </div>
          </div>

          {/* Change Password */}
          <div className="bg-white rounded-xl shadow p-4">
            <div className="flex items-center gap-2 mb-3">
              <FaLock className="text-primary" />
              <h4 className="font-semibold">Change Password</h4>
            </div>

            <input
              type="password"
              placeholder="Current Password"
              className="w-full border rounded-lg px-3 py-2 mb-2"
            />

            <input
              type="password"
              placeholder="New Password"
              className="w-full border rounded-lg px-3 py-2 mb-3"
            />

            <button className="w-full bg-gray-900 text-white py-2 rounded-lg hover:opacity-90">
              Update Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
