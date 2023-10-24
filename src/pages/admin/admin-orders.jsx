import BaseBreadCrumb from "@/components/base-components/BaseBreadCrumb";
import BaseButton from "@/components/base-components/BaseButton";
import orderService from "@/services/orderService";
import { useState, useEffect } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AdminOrders() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [userOrders, setUserOrders] = useState([]);
  // console.log("userorder", userOrders);
  console.log(userOrders);
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
    // const queryParams = searchParams.get("deliveryStatus");
    // fetchOrders(`?deliveryStatus=${queryParams}`);
    fetchOrders();
  }, []);

  const ordersBreadcrumb = [
    { name: "Admin", to: "/admin" },
    { name: "Orders", to: "/admin/admin-orders" },
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
    { name: "Action" },
  ];
  const navigate = useNavigate();

  const acceptedOrder = async (deliveryStatus, orderId) => {
    try {
      const response = await orderService.updateDeliveryStatus(
        deliveryStatus,
        orderId
      );
      console.log("res", response);
      navigate(`/admin/admin-orders?deliveryStatus=${deliveryStatus}`);
      fetchOrders();
    } catch (error) {
      if (error.response === 500) {
        toast.error(error.response.statusText);
      }
    }
  };

  return (
    <>
      <div className="container mx-auto max-w-4xl lg:max-w-6xl my-6 px-4 md:px-6">
        <BaseBreadCrumb breadcrumb={ordersBreadcrumb}></BaseBreadCrumb>

        <ul className="flex gap-2 mb-4">
          {deliveryStatusTabs.map((tab, index) => {
            return (
              <li className="flex items-center" key={"order-crump" + index}>
                <Link
                  className="text-neutral-500 text-sm p-2 breadcrumb-link"
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
                    className="px-6 py-3 border border-gray-500 text-center text-xs leading-4 text-gray-800 uppercase tracking-wider"
                  >
                    {headItm.name}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {userOrders
              ? userOrders.map((tableData, data) => (
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
                      {/* {cartTotalQuantity} */}
                      {tableData.cart.reduce((acc, currentVAl) => {
                        acc = acc + currentVAl.quantity;
                        return acc;
                      }, 0)}
                    </td>

                    <td className="px-6 py-2 border border-gray-500 text-center">
                      {tableData.deliveryStatus}
                    </td>
                    <td className=" border px-1 border-gray-500 text-center">
                      <div className="flex gap-3">
                        <div className="">
                          <BaseButton
                            type="button"
                            className=" bg-teal-500 hover:bg-teal-700 rounded-sm px-6 py-2"
                            onClick={() =>
                              acceptedOrder("accepted", tableData._id)
                            }
                          >
                            Accept
                          </BaseButton>
                        </div>
                        <div>
                          <BaseButton
                            type="button"
                            className=" bg-red-500 text-white hover:bg-red-700 rounded-sm px-6 py-2"
                            onClick={() =>
                              acceptedOrder("declined", tableData._id)
                            }
                          >
                            Decline
                          </BaseButton>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default AdminOrders;
