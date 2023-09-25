import CartContext from "@/contexts/CartContext";
import { useContext } from "react";

export default function OrderItems() {
  const { cart } = useContext(CartContext);
  return (
    <>
      {cart.map((cartItem, index) => {
        return (
          <div key={index} className="flex py-2 divide-y px-3 gap-3">
            <div className="w-40">
              <img
                src={cartItem.dish.imgUrl}
                alt="image"
                className="rounded-sm"
              />
            </div>
            <div className="flex justify-between w-full">
              <div>
                <h1 className="text-xl">{cartItem.dish.dishName}</h1>
                <h1 className="">{cartItem.price}</h1>
              </div>
              <div className="py-3 text-xs">
                Qty.{" "}
                <span className="border px-3 py-1">{cartItem.quantity}</span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
