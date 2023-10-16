import CartContext from "@/contexts/CartContext";
import userService from "@/services/userService";
import UserContext from "@/contexts/UserContext";

import { useState, useContext } from "react";
import { toast } from "react-toastify";

export default function CartProvider({ children }) {
  const { user } = useContext(UserContext);
  const currentData = JSON.parse(localStorage.getItem("cartData") || "[]");
  const [cart, setCart] = useState(currentData);
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  const addToCart = async (dishItem) => {
    const cartItem = cart.findIndex((item) => item.dish._id === dishItem._id);
    if (cartItem !== -1) {
      const updatedCart = [...cart];
      updatedCart[cartItem].quantity += 1;
      updatedCart[cartItem].price =
        updatedCart[cartItem].quantity * dishItem.price;
      setCart(updatedCart);
      localStorage.setItem("cartData", JSON.stringify(updatedCart));
    } else {
      const newItem = {
        dish: dishItem,
        quantity: 1,
        price: dishItem.price,
      };
      const currentNewData = [...cart, newItem];
      setCart(currentNewData);
      localStorage.setItem("cartData", JSON.stringify(currentNewData));
    }
  };

  const decrementQuantity = (dishItem) => {
    const cartItem = cart.findIndex((item) => item.dish._id === dishItem._id);
    if (cartItem !== 1) {
      const updatedCart = [...cart];
      updatedCart[cartItem].quantity -= 1;
      updatedCart[cartItem].price =
        updatedCart[cartItem].quantity * dishItem.price;
      setCart(updatedCart);
      localStorage.setItem("cartData", JSON.stringify(updatedCart));
    }
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.dish._id !== itemId);
    setCart(updatedCart);
    localStorage.setItem("cartData", JSON.stringify(updatedCart));
  };

  const orderKnow = async () => {
    try {
      const order = {
        userId: user._id,
        cart: cart,
        orderAmount: totalPrice,
        paymentMethod: "cash",
        deliveryStatus: "received",
        address: user.defaultAddress,
      };
      const response = await userService.order(order);
      if (response.status == 200) {
        setCart([]);
        toast.success("Your Order placed successfully.");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        orderKnow,
        totalPrice,
        decrementQuantity,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
