import BaseBreadCrumb from "@/components/base-components/BaseBreadCrumb";
import BaseButton from "@/components/base-components/BaseButton";
import BaseIcon from "@/components/base-components/BaseIcon";
// import BaseNavLink from "@/components/base-components/BaseNavLink";
import { DELIVERY_STATUS, ICONS } from "@/helpers/constants";
import orderService from "@/services/orderService";
import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";

import { toast } from "react-toastify";

function AdminOrders() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [userOrders, setUserOrders] = useState([]);

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
  const queryParams = searchParams.get("deliveryStatus");
  useEffect(() => {
    const queryParams = searchParams.get("deliveryStatus");
    fetchOrders(queryParams && `?deliveryStatus=${queryParams}`);
  }, []);

  const ordersBreadcrumb = [
    { name: "Admin", to: "/admin" },
    { name: "Orders", to: "/admin/admin-orders" },
  ];

  const deliveryStatusTabs = [
    { name: "All", classStatus: "", to: "" },
    {
      name: "Received",
      classStatus: "received",
      to: "?deliveryStatus=received",
    },
    {
      name: "Accepted",
      classStatus: "accepted",
      to: "?deliveryStatus=accepted",
    },
    {
      name: "Declined",
      classStatus: "declined",
      to: "?deliveryStatus=declined",
    },
    {
      name: "Out for delivery",
      classStatus: "out-for-delivery",
      to: "?deliveryStatus=out-for-delivery",
    },
    {
      name: "Delivered",
      classStatus: "delivered",
      to: "?deliveryStatus=delivered",
    },
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

  const orderDate = (tableData) => {
    const dateString = tableData.orderDate;
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    const formattedDate = `${day} ${month} ${year}`;
    return formattedDate;
  };

  const renderDeliveryStatus = (tableData) => {
    switch (tableData.deliveryStatus) {
      case "accepted":
        return (
          <div className="flex gap-1 items-center justify-center rounded-full py-2 px-3 grow-0 shrink">
            <BaseIcon
              iconName={ICONS.handThumbUp}
              className="h-5 w-5 text-amber-500"
            ></BaseIcon>
            <span className="uppercase text-xs font-semibold text-amber-500">
              {tableData.deliveryStatus}
            </span>
          </div>
        );
      case "declined":
        return (
          <div className="flex gap-1 items-center justify-center rounded-full py-2 px-3 grow-0 shrink">
            <BaseIcon
              iconName={ICONS.crossCircle}
              className="h-5 w-5 text-red-500"
            ></BaseIcon>
            <span className="uppercase text-xs font-semibold text-red-500">
              {tableData.deliveryStatus}
            </span>
          </div>
        );
      case "out-for-delivery":
        return (
          <div className="flex gap-1 items-center justify-center rounded-full py-2 px-3 grow-0 shrink">
            <BaseIcon
              iconName={ICONS.Truck}
              className=" flex h-5 w-5 text-blue-500"
            ></BaseIcon>
            <span className="uppercase text-xs font-semibold text-blue-500">
              {tableData.deliveryStatus}
            </span>
          </div>
        );
      case "delivered":
        return (
          <div className="flex gap-1 items-center justify-center rounded-full py-2 px-3 grow-0 shrink">
            <span className="flex items-center gap-1 uppercase text-xs font-semibold text-teal-500">
              <BaseIcon
                iconName={ICONS.delivered}
                className=" flex h-5 w-5"
              ></BaseIcon>

              {tableData.deliveryStatus}
            </span>
          </div>
        );
      default:
        return (
          <div className="flex gap-1 items-center justify-center rounded-full py-2 px-3 grow-0 shrink">
            <BaseIcon
              iconName={ICONS.InboxArrowDown}
              className="h-5 w-5 text-gray-500"
            ></BaseIcon>
            <span className="uppercase text-xs font-semibold text-gray-500">
              {tableData.deliveryStatus}
            </span>
          </div>
        );
    }
  };

  const actionOfOrders = (tableData) => {
    switch (tableData.deliveryStatus) {
      case "received":
        return (
          <div className="flex gap-1 divide-x">
            <div className="">
              <BaseButton
                type="button"
                className="text-teal-500 hover:bg-teal-50 rounded-sm px-2 py-1 m-1"
                onClick={() => acceptedOrder("accepted", tableData._id)}
              >
                Accept
              </BaseButton>
            </div>
            <div>
              <BaseButton
                type="button"
                className=" text-red-500 hover:bg-red-50 rounded-sm px-2 py-1 m-1"
                onClick={() => acceptedOrder("declined", tableData._id)}
              >
                Decline
              </BaseButton>
            </div>
          </div>
        );
      case "accepted":
        return (
          <div className="">
            <BaseButton
              type="button"
              className=" text-yellow-500  hover:bg-yellow-50 rounded-sm px-1 py-1 w-36"
              onClick={() => acceptedOrder("out-for-delivery", tableData._id)}
            >
              Out For Delivery
            </BaseButton>
          </div>
        );
      case "out-for-delivery":
        return (
          <div className="">
            <BaseButton
              type="button"
              className=" text-blue-500 hover:bg-blue-50 rounded-sm  py-1 w-36"
              onClick={() => acceptedOrder("delivered", tableData._id)}
            >
              Mark Delivered
            </BaseButton>
          </div>
        );
      case "delivered":
        return (
          <div className="flex justify-center">
            <BaseIcon
              iconName={ICONS.check}
              className=" flex  w-7 h-7 text-teal-500"
            ></BaseIcon>
          </div>
        );
      case "declined":
        return (
          <div className="flex justify-center">
            <BaseIcon
              iconName={ICONS.crossCircle}
              className=" flex  w-7 h-7 text-red-500"
            ></BaseIcon>
          </div>
        );
    }
  };

  const acceptedOrder = async (deliveryStatus, orderId) => {
    try {
      const response = await orderService.updateDeliveryStatus(
        deliveryStatus,
        orderId
      );
      console.log("res", response);
      fetchOrders();
    } catch (error) {
      if (error.response === 500) {
        toast.error(error.response.statusText);
      }
    }
  };

  return (
    <>
      <div className="container mx-auto my-6 px-4 md:px-6">
        <BaseBreadCrumb breadcrumb={ordersBreadcrumb}></BaseBreadCrumb>

        <ul className="flex gap-2 mb-4">
          {deliveryStatusTabs.map((tab, index) => {
            return (
              <Link
                to={tab.to}
                key={"order-crump" + index}
                className={`py-5 px-6 hover:text-teal-600 ${
                  queryParams === tab.classStatus
                    ? "text-teal-600 border-b-[3px] border-b-teal-600"
                    : ""
                }`}
                onClick={() => {
                  fetchOrders(tab.to);
                }}
              >
                <li className="flex items-center">{tab.name}</li>
              </Link>
            );
          })}
        </ul>

        <div className="overflow-x-auto">
          <table className="text-left">
            <thead className="w-full">
              <tr>
                {Data.map((headItm, heading) => {
                  return (
                    <th
                      key={heading}
                      className="px-6 py-3 text-xs leading-4 text-gray-800 uppercase tracking-wider"
                    >
                      {headItm.name}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="divide-y w-full">
              {userOrders
                ? userOrders.map((tableData, data) => (
                    <tr key={data}>
                      <td className="px-6 py-2">{tableData._id}</td>
                      <td className="px-6 py-2">{tableData.address.name}</td>
                      <td className="px-6 py-2">
                        {tableData.address.addressLine}
                      </td>
                      <td className="px-6 py-2">{orderDate(tableData)}</td>
                      <td className="px-6 py-2">{tableData.orderAmount}</td>

                      <td className="px-6 py-2">
                        {/* {cartTotalQuantity} */}
                        {tableData.cart.reduce((acc, currentVAl) => {
                          acc = acc + currentVAl.quantity;
                          return acc;
                        }, 0)}
                      </td>

                      <td className="px-6 py-2">
                        {renderDeliveryStatus(tableData)}
                      </td>
                      <td className="px-2">{actionOfOrders(tableData)}</td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default AdminOrders;
