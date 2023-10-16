import { Outlet } from "react-router-dom";
// import BaseNavbar from "../components/base-components/BottomBaseNavbar";

import { ToastContainer } from "react-toastify";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import BaseNavbarCopy from "@/components/base-components/BaseNavbarCopy";
// import BottomBaseNavbar from "@/components/base-components/BottomBaseNavbar";

export default function Home() {
  let location = useLocation();
  const [hideNavbar, setHideNavbar] = useState(false);

  useEffect(() => {
    if (location.pathname === "/login") {
      setHideNavbar(true);
    } else if (location.pathname === "/sign-up") {
      setHideNavbar(true);
    } else {
      setHideNavbar(false);
    }
  }, [location.pathname]);

  return (
    <>
      {!hideNavbar && <BaseNavbarCopy></BaseNavbarCopy>}

      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Outlet></Outlet>
    </>
  );
}
