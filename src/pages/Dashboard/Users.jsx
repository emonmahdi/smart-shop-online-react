import { useState } from "react";
import { FaTrash, FaUserShield } from "react-icons/fa";

const initialUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@gmail.com",
    role: "user",
    status: "active",
  },
  {
    id: 2,
    name: "Admin Boss",
    email: "admin@gmail.com",
    role: "admin",
    status: "active",
  },
  {
    id: 3,
    name: "Sarah Smith",
    email: "sarah@gmail.com",
    role: "user",
    status: "blocked",
  },
];

export default function Users() {
  const [users, setUsers] = useState(initialUsers);

  const changeRole = (id) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id ? { ...u, role: u.role === "admin" ? "user" : "admin" } : u
      )
    );
  };

  const toggleStatus = (id) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id
          ? { ...u, status: u.status === "active" ? "blocked" : "active" }
          : u
      )
    );
  };

  const deleteUser = (id) => {
    if (!confirm("Are you sure you want to delete this user?")) return;
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen max-w-7xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-8 text-gray-900">
        User Management
      </h1>

      {/* Desktop Table */}
      <div className="hidden md:block bg-white rounded-2xl shadow-lg overflow-x-auto">
        <table className="w-full text-gray-700 text-sm">
          <thead className="bg-gray-100 uppercase tracking-wide text-gray-500 text-xs select-none">
            <tr>
              <th className="px-6 py-4 text-left">#</th>
              <th className="px-6 py-4 text-left">Name</th>
              <th className="px-6 py-4 text-left">Email</th>
              <th className="px-6 py-4 text-center">Role</th>
              <th className="px-6 py-4 text-center">Status</th>
              <th className="px-6 py-4 text-right pr-8">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u, idx) => (
              <tr
                key={u.id}
                className={`border-b hover:bg-gray-50 transition duration-150 ${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="px-6 py-4 font-medium">{u.id}</td>
                <td className="px-6 py-4 font-semibold text-gray-900">
                  {u.name}
                </td>
                <td className="px-6 py-4">{u.email}</td>

                {/* Role */}
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => changeRole(u.id)}
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full font-medium text-xs shadow-sm transition-colors
                      ${
                        u.role === "admin"
                          ? "bg-purple-100 text-purple-700 hover:bg-purple-200"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    aria-label={`Change role of ${u.name}`}
                    title={`Click to change role from ${u.role}`}
                  >
                    {u.role === "admin" && <FaUserShield />}
                    {u.role}
                  </button>
                </td>

                {/* Status */}
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => toggleStatus(u.id)}
                    className={`inline-flex px-3 py-1 rounded-full font-medium text-xs shadow-sm transition-colors
                      ${
                        u.status === "active"
                          ? "bg-green-100 text-green-700 hover:bg-green-200"
                          : "bg-red-100 text-red-700 hover:bg-red-200"
                      }`}
                    aria-label={`Toggle status of ${u.name}`}
                    title={`Click to toggle status from ${u.status}`}
                  >
                    {u.status}
                  </button>
                </td>

                {/* Actions */}
                <td className="text-right pr-8">
                  <button
                    onClick={() => deleteUser(u.id)}
                    className="text-red-500 hover:text-red-700 transition"
                    aria-label={`Delete user ${u.name}`}
                    title="Delete user"
                  >
                    <FaTrash size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-6">
        {users.map((u) => (
          <div
            key={u.id}
            className="bg-white p-5 rounded-2xl shadow-md border border-gray-200"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-lg text-gray-900">{u.name}</h3>
              <button
                onClick={() => deleteUser(u.id)}
                className="text-red-500 hover:text-red-700 transition"
                aria-label={`Delete user ${u.name}`}
                title="Delete user"
              >
                <FaTrash size={20} />
              </button>
            </div>

            <p className="text-sm text-gray-600 mb-2">{u.email}</p>

            <div className="flex gap-3">
              <button
                onClick={() => changeRole(u.id)}
                className={`text-xs px-4 py-1 rounded-full font-medium shadow-sm transition-colors
                  ${
                    u.role === "admin"
                      ? "bg-purple-100 text-purple-700 hover:bg-purple-200"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                aria-label={`Change role of ${u.name}`}
                title={`Click to change role from ${u.role}`}
              >
                {u.role === "admin" && <FaUserShield className="inline mr-1" />}
                {u.role}
              </button>

              <button
                onClick={() => toggleStatus(u.id)}
                className={`text-xs px-4 py-1 rounded-full font-medium shadow-sm transition-colors
                  ${
                    u.status === "active"
                      ? "bg-green-100 text-green-700 hover:bg-green-200"
                      : "bg-red-100 text-red-700 hover:bg-red-200"
                  }`}
                aria-label={`Toggle status of ${u.name}`}
                title={`Click to toggle status from ${u.status}`}
              >
                {u.status}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
