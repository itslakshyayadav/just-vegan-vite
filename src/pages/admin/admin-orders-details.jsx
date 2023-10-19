import orderService from "@/services/orderService";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

function AdminOrdersDetails() {
  const [userOrders, setUserOrders] = useState([]);
  useEffect(() => {
    const fetchUserOrders = async () => {
      try {
        const response = await orderService.getAllOrders();
        console.log(`response`);
        console.log(response);

        setUserOrders(response.data.payload);
      } catch (error) {
        if (error.response === 500) {
          toast.error(error.response.statusText);
        }
      }
    };
    fetchUserOrders();
  }, []);
  console.log(`userOrders`);
  console.log(userOrders);

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
      <div className=" m-auto py-8">
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
