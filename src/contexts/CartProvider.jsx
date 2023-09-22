import CartContext from "@/contexts/CartContext";
import { useState } from "react";

export default function CartProvider({ children }) {
  const currentData = JSON.parse(localStorage.getItem("cartData") || "[]");
  const [cart, setCart] = useState(currentData);

  const addToCart = async (dishItem) => {
    const newItem = {
      dish: dishItem,
      quantity: "1",
      price: dishItem.price,
    };
    const currentNewData = [...cart, newItem];
    localStorage.setItem("cartData", JSON.stringify(currentNewData));
    setCart(currentNewData);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
