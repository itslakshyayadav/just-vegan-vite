import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import UserProvider from "@/contexts/UserProvider";
import CartProvider from "@/contexts/CartProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>

  <UserProvider>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </UserProvider>
  // </React.StrictMode>
);
