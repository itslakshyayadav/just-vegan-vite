import { Outlet } from "react-router-dom";
import BaseNavbar from "../components/base-components/BaseNavbar";
import { ToastContainer } from "react-toastify";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";

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
      {!hideNavbar && <BaseNavbar></BaseNavbar>}

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
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
