import { Link } from "react-router-dom";
import BrandLogo from "@/components/base-components/BrandLogo";
import BaseIcon from "./BaseIcon";
import BaseNavLink from "./BaseNavLink";

export default function BaseNavbar() {
  const userAuthStore = localStorage.getItem("userAuth");
  let userAuthObject = {};
  if (userAuthStore) {
    userAuthObject = JSON.parse(userAuthStore);
    // console.log(userAuthObject.name);
  }

  const navLinks = [
    {
      name: "Dishes",
      to: "dishes",
    },
    {
      name: "Offers",
      to: "offers",
    },
    {
      name: "Admin",
      to: "admin",
    },
  ];

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div>
      <nav className="bg-zinc-950 flex justify-between items-center p-2">
        <div className="flex gap-8 items-center">
          <Link to="/">
            <BrandLogo />
          </Link>
          <ul className="flex gap-3">
            {navLinks.map((elements, index) => {
              return (
                <li key={"navbar" + index}>
                  <BaseNavLink to={elements.to} variant="headerLink">
                    {elements.name}
                  </BaseNavLink>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex gap-2">
          <Link to="" className="px-6 py-3">
            <BaseIcon iconName="cart"></BaseIcon>
          </Link>

          {userAuthObject && userAuthObject.accessToken ? (
            <>
              <Link
                to="/my-account"
                className="text-white px-6 py-3 rounded-lg border  md:hover:text-green-500 "
              >
                {userAuthObject.name}
              </Link>
              <Link
                to="/login"
                onClick={handleLogout}
                className=" text-white px-6 py-3 rounded-lg border  md:hover:text-green-500 "
              >
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className=" text-white px-6 py-3 rounded-lg border  md:hover:text-green-500 "
              >
                Login
              </Link>
              <Link
                to="/sign-up"
                className=" text-white px-6 py-3 rounded-lg border  md:hover:text-green-500 "
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
