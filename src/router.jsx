import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Dishes from "./pages/dishes";
import AdminDish from "./pages/admin-dish";
import Offers from "./pages/offers";
import OfferCardAdmin from "./pages/offercard-admin";

const router = createBrowserRouter([
  {
    path: "",
    element: <Home />,
    children: [
      {
        path: "/dishes",
        element: <Dishes />,
      },
      {
        path: "/admin-dish",
        element: <AdminDish />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/offercard-admin",
        element: <OfferCardAdmin />,
      },
    ],
  },
]);

export default router;
