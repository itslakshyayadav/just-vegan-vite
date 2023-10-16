import { Link } from "react-router-dom";
import BrandLogo from "@/components/base-components/BrandLogo";
import BaseButton from "@/components/base-components/BaseButton";
import BaseIcon from "@/components/base-components/BaseIcon";
import BaseNavLink from "./BaseNavLink";
import Dropdown from "../Dropdown";
import DefaultAddressSlider from "@/components/page-components/DefaultAddressSlider";
import { ICONS } from "@/helpers/constants";
import DefaultCartSlider from "../page-components/DefaultCartSlider";
import UserContext from "@/contexts/UserContext";
import { useContext } from "react";
import CartContext from "@/contexts/CartContext";

export default function BaseNavbar() {
  const { user } = useContext(UserContext);
  const { totalQuantity } = useContext(CartContext);

  const userAuthStore = localStorage.getItem("userAuth");
  let userAuthObject = {};
  if (userAuthStore) {
    userAuthObject = JSON.parse(userAuthStore);
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
    // {
    //   name: "Admin",
    //   to: "admin",
    // },
  ];

  const navLinks = [
    {
      name: "Dishes",
      to: "dishes",
    },
    {
      name: "Offers",
      to: "offers",
    },
  ];

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <>
      <div className="flex h-16 w-full z-10">
        <nav className="bg-teal-950 flex justify-between items-center p-2 fixed top-0 w-full px-5">
          <div className="flex gap-10 items-center">
            <Link to="/">
              <BrandLogo className="w-28" />
            </Link>
            <ul className="flex gap-3">
              <DefaultAddressSlider>
                <li className=" ">
                  <BaseButton
                    variant="transparent"
                    className="flex items-center gap-2 rounded-md py-2 px-5 text-white text-sm"
                  >
                    {user &&
                    user.defaultAddress &&
                    user.defaultAddress.addressLine ? (
                      <>
                        {" "}
                        <BaseIcon
                          iconName="my_location"
                          className="fill-white w-5 flex"
                        ></BaseIcon>{" "}
                        {user.defaultAddress.addressLine}
                      </>
                    ) : (
                      "Choose location"
                    )}
                    <BaseIcon iconName="downarrow" className="w-4"></BaseIcon>
                  </BaseButton>
                </li>
              </DefaultAddressSlider>
            </ul>
          </div>

          <ul className="flex gap-5 items-center">
            {navLinks.map((elements, index) => {
              return (
                <li className="flex" key={"navbar" + index}>
                  <BaseNavLink to={elements.to} variant="headerLink">
                    {elements.name}
                  </BaseNavLink>
                </li>
              );
            })}
            <li className="flex">
              <Link>
                <DefaultCartSlider>
                  <BaseButton
                    variant="transparent"
                    className="text-white p-2 relative flex items-center gap-1"
                  >
                    {totalQuantity ? (
                      <span className="tetx-white absolute top-0 right-0 bg-red-700 rounded-full px-1 text-sm">
                        {totalQuantity}
                      </span>
                    ) : null}

                    <BaseIcon
                      iconName={ICONS.Cart}
                      className="w-6 fill-none"
                    ></BaseIcon>
                  </BaseButton>
                </DefaultCartSlider>
              </Link>
            </li>

            <div className="flex items-center gap-5">
              {userAuthObject.name ? (
                <>
                  <Dropdown
                    dropdownElement={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    }
                  >
                    <div className="flex flex-col gap-1 py-1">
                      <h1 className="px-4 py-1 font-medium text-left">
                        <small>Hello {userAuthObject.name}</small>
                      </h1>
                      <hr />
                      {options.map((option, index) => {
                        return (
                          <Link
                            to={option.to}
                            key={index}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                          >
                            {option.name}
                          </Link>
                        );
                      })}
                      {user && user.userType === "admin" ? (
                        <Link
                          to="/admin"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                        >
                          Admin
                        </Link>
                      ) : null}
                      <BaseButton
                        type="button"
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                        variant="logoutBtn"
                        onClick={handleLogout}
                      >
                        Logout
                      </BaseButton>
                    </div>
                  </Dropdown>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className=" text-white px-6 py-3   md:hover:text-green-500 "
                  >
                    Login
                  </Link>

                  <Link
                    to="/sign-up"
                    className="flex items-center rounded-md py-2 px-4 bg-white hover:bg-teal-600"
                  >
                    <span>Sign Up</span>
                  </Link>
                </>
              )}
            </div>
          </ul>
        </nav>
      </div>
      lakshya yadav
    </>
  );
}
