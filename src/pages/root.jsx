import { Outlet } from "react-router-dom";
import BaseNavbar from "../components/base-components/BaseNavbar";
export default function Home() {
  return (
    <>
      <BaseNavbar></BaseNavbar>
      <Outlet></Outlet>
    </>
  );
}
