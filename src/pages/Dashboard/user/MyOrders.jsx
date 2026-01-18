import { useState } from "react";

const statusStyle = {
  Pending: "bg-yellow-50 text-yellow-700 ring-1 ring-yellow-200",
  Processing: "bg-blue-50 text-blue-700 ring-1 ring-blue-200",
  Delivered: "bg-green-50 text-green-700 ring-1 ring-green-200",
  Cancelled: "bg-red-50 text-red-700 ring-1 ring-red-200",
};

const MyOrders = () => {
  const [orders] = useState([
    {
      id: "#ORD-1001",
      date: "Jan 10, 2025",
      items: 3,
      total: 1200,
      payment: "Paid",
      status: "Delivered",
    },
    {
      id: "#ORD-1002",
      date: "Jan 14, 2025",
      items: 2,
      total: 800,
      payment: "Paid",
      status: "Processing",
    },
    {
      id: "#ORD-1003",
      date: "Jan 17, 2025",
      items: 1,
      total: 350,
      payment: "COD",
      status: "Pending",
    },
  ]);

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">My Orders</h1>
          <p className="text-sm text-gray-500 mt-1">
            View and manage your recent orders
          </p>
        </div>

        <button className="hidden sm:block px-4 py-2 text-sm bg-primary text-white rounded-lg hover:opacity-90">
          Download Invoice
        </button>
      </div>

      {/* ================= TABLE ================= */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-600 text-xs uppercase tracking-wide">
              <th className="px-6 py-4 text-left">Order</th>
              <th className="px-6 py-4 text-left">Date</th>
              <th className="px-6 py-4 text-center">Items</th>
              <th className="px-6 py-4 text-right">Total</th>
              <th className="px-6 py-4 text-center">Payment</th>
              <th className="px-6 py-4 text-center">Status</th>
              <th className="px-6 py-4 text-right">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {orders.map((order) => (
              <tr
                key={order.id}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4 font-medium text-gray-900">
                  {order.id}
                </td>
                <td className="px-6 py-4 text-gray-600">{order.date}</td>
                <td className="px-6 py-4 text-center">{order.items}</td>
                <td className="px-6 py-4 text-right font-semibold">
                  ৳{order.total}
                </td>
                <td className="px-6 py-4 text-center text-sm">
                  {order.payment}
                </td>
                <td className="px-6 py-4 text-center">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusStyle[order.status]}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-sm text-primary hover:underline">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="sm:hidden space-y-4 mt-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-xl border p-4 shadow-sm"
          >
            <div className="flex justify-between items-center">
              <p className="font-medium">{order.id}</p>
              <span
                className={`text-xs px-2 py-1 rounded-full ${statusStyle[order.status]}`}
              >
                {order.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-3 text-sm text-gray-600">
              <p>Date</p>
              <p className="text-right">{order.date}</p>
              <p>Items</p>
              <p className="text-right">{order.items}</p>
              <p>Total</p>
              <p className="text-right font-semibold text-gray-900">
                ৳{order.total}
              </p>
            </div>

            <button className="mt-4 w-full py-2 text-sm bg-primary text-white rounded-lg">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
