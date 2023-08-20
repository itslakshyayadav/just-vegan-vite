import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/root";
import Dishes from "./pages/dishes/dishes";
import AdminDish from "./pages/dishes/admin-dish";
import Offers from "./pages/offers/offers";
import OfferCardAdmin from "./pages/offers/offercard-admin";
import Home from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
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
