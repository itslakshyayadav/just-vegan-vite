import { Link } from "react-router-dom";
import BrandLogo from "@/components/base-components/BrandLogo";
import BaseButton from "@/components/base-components/BaseButton";
import BaseIcon from "@/components/base-components/BaseIcon";
import BaseNavLink from "./BaseNavLink";
import Dropdown from "../Dropdown";

export default function BaseNavbar() {
  const userAuthStore = localStorage.getItem("userAuth");
  let userAuthObject = {};
  if (userAuthStore) {
    userAuthObject = JSON.parse(userAuthStore);
    // console.log(userAuthObject.name);
  }
  const options = [
    {
      name: "My Account",
      to: "my-account",
    },
    {
      name: "Settings",
      to: "setting",
    },
  ];

  // const options = ["My account", "Setting", "logout"];

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
    <div className="flex h-20 w-full z-10">
      <nav className="bg-zinc-950 flex justify-between items-center p-2 fixed top-0 w-full">
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

          <div className="flex  items-center">
            {userAuthObject.name ? (
              <Dropdown options={options}>
                <div className="py-1">
                  <h1 className="px-4 py-1 font-medium text-left">
                    <small>hello {userAuthObject.name}</small>
                    <small> {userAuthObject.phone}</small>
                  </h1>
                  <hr />
                  {options.map((option, index) => {
                    return (
                      <Link
                        to={option.to}
                        key={index}
                        className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      >
                        {option.name}
                      </Link>
                    );
                  })}
                  <BaseButton
                    type="button"
                    variant="logoutBtn"
                    onClick={handleLogout}
                  >
                    Logout
                  </BaseButton>
                </div>
              </Dropdown>
            ) : (
              <>
                <div className="flex gap-3">
                  <Link
                    to="/sign-up"
                    className=" text-white px-6 py-3 rounded-lg border  md:hover:text-green-500 "
                  >
                    Sign Up
                  </Link>

                  <Link
                    to="/login"
                    className=" text-white px-6 py-3 rounded-lg border  md:hover:text-green-500 "
                  >
                    Login
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
