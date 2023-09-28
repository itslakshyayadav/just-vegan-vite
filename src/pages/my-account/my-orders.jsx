import userService from "@/services/userService";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function MyOrders() {
  const [order, setOrder] = useState([]);

  const fetchUserData = async () => {
    const response = await userService.getUserOrders();
    setOrder(response.data.payload);
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <div className="m-auto max-w-screen-md">
        <h1 className="text-xl py-2 font-semibold text-neutral-800">Orders</h1>

        {order.map((orderItem, index) => {
          return (
            <div key={index} className="border rounded-sm mb-8 hover:shadow-xl">
              <div className="flex justify-between bg-[#FAFAFA] py-2 px-3">
                <div className="flex gap-20">
                  <div className="flex flex-col gap-1">
                    <h1 className="text-xs text-gray-500">ORDER PLACED</h1>
                    <p className="text-xs font-semibold text-neutral-800">
                      {orderItem.orderDate}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h1 className="text-xs text-gray-500">TOTAL</h1>
                    <p className="text-xs font-semibold text-neutral-800">
                      {orderItem.orderAmount}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h1 className="text-xs text-gray-500">SHIP TO</h1>
                    <p className="text-xs font-semibold text-neutral-800">
                      {orderItem.address.addressLine}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="text-xs text-gray-500">ORDER-ID</h1>
                  <p className="text-xs font-semibold text-neutral-800">
                    {orderItem._id}
                  </p>
                </div>
              </div>
              {orderItem.cart.map((cartItem, index) => {
                return (
                  <div key={index}>
                    <Link
                      to={`/dishes/${cartItem.dish._id}`}
                      className="flex py-2 divide-y px-3 gap-5 hover:shadow-xl"
                    >
                      <div className="w-40">
                        <img
                          src={cartItem.dish.imgUrl}
                          alt="image"
                          className="rounded-lg"
                        />
                      </div>
                      <div className="flex justify-between w-full">
                        <div>
                          <h1 className="text-lg font-semibold text-neutral-800">
                            {cartItem.dish.dishName}
                          </h1>
                          <h1 className="text-xs text-gray-500">
                            {cartItem.dish.dishCategory}
                          </h1>
                          <h1 className="text-xs text-gray-500">
                            ₹ {cartItem.price}
                          </h1>
                        </div>
                        <div className="py-3 text-xs">
                          Qty.
                          <span className="border px-3 py-1">
                            {cartItem.quantity}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}
