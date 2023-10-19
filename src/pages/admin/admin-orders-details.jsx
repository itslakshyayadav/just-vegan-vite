import BaseIcon from "@/components/base-components/BaseIcon";
import { ICONS } from "@/helpers/constants";
import orderService from "@/services/orderService";
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

function AdminOrdersDetails() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [userOrders, setUserOrders] = useState([]);

  const fetchOrders = async (query) => {
    try {
      const response = await orderService.getAllOrders(query);
      setUserOrders(response.data.payload);
    } catch (error) {
      if (error.response === 500) {
        toast.error(error.response.statusText);
      }
    }
  };

  useEffect(() => {
    const queryParams = searchParams.get("deliveryStatus");
    fetchOrders(`?deliveryStatus=${queryParams}`);
  }, []);

  const ordersBreadcrumb = [
    { name: "Admin", to: "/admin" },
    { name: "Orders", to: "/admin/orders" },
  ];

  const deliveryStatusTabs = [
    { name: "All", to: "" },
    { name: "Received", to: "?deliveryStatus=received" },
    { name: "Accepted", to: "?deliveryStatus=accepted" },
    { name: "Declined", to: "?deliveryStatus=declined" },
    { name: "Out for delivery", to: "?deliveryStatus=out-for-delivery" },
    { name: "Delivered", to: "?deliveryStatus=delivered" },
  ];

  const Data = [
    { name: "OrderId" },
    { name: "Name" },
    { name: "Address" },
    { name: "Order Date" },
    { name: "Order Amount" },
    { name: "Total Dishes" },
    { name: "Delivery Status" },
    // { name: "Action" },
  ];

  return (
    <>
      <div className="container mx-auto max-w-4xl lg:max-w-6xl my-6 px-4 md:px-6">
        <ul className="flex gap-2">
          {ordersBreadcrumb.map((crumb, index) => {
            return (
              <li className="flex items-center" key={"order-crump" + index}>
                <Link className="text-neutral-500 text-sm p-2" to={crumb.to}>
                  {crumb.name}
                </Link>
                <BaseIcon
                  className="h-3 w-3"
                  iconName={ICONS.ChevronRight}
                ></BaseIcon>
              </li>
            );
          })}
        </ul>

        <ul className="flex gap-2">
          {deliveryStatusTabs.map((tab, index) => {
            return (
              <li className="flex items-center" key={"order-crump" + index}>
                <Link
                  className="text-neutral-500 text-sm p-2"
                  to={tab.to}
                  onClick={() => {
                    fetchOrders(tab.to);
                  }}
                >
                  {tab.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <table className="border">
          <thead>
            <tr>
              {Data.map((headItm, heading) => {
                return (
                  <th
                    key={heading}
                    className="px-6 py-3 border border-gray-500 text-left text-xs leading-4 text-gray-800 uppercase tracking-wider"
                  >
                    {headItm.name}
                  </th>
                );
              })}
              <th className="px-6 py-3 border bg-slate-500 border-gray-500 text-left text-xs leading-4 text-gray-800 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {userOrders.map((tableData, data) => (
              <tr key={data}>
                <td className="px-6 py-2 border border-gray-500">
                  {tableData._id}
                </td>
                <td className="px-6 py-2  border border-gray-500">
                  {tableData.address.name}
                </td>
                <td className="px-6 py-2 border border-gray-500">
                  {tableData.address.addressLine}
                </td>
                <td className="px-6 py-2 border border-gray-500">
                  {tableData.orderDate}
                </td>
                <td className="px-6 py-2 border border-gray-500 text-center">
                  {tableData.orderAmount}
                </td>
                <td className="px-6 py-2 border border-gray-500 text-center">
                  1
                </td>
                <td className="px-6 py-2 border border-gray-500 text-center">
                  {tableData.deliveryStatus}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default AdminOrdersDetails;
