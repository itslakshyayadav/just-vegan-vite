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
import { useContext, useState } from "react";
import CartContext from "@/contexts/CartContext";

function BaseNavbarCopy() {
  const [isOpen, setIsOpen] = useState(false);

  const { user } = useContext(UserContext);
  const { totalQuantity } = useContext(CartContext);

  const userAuthStore = localStorage.getItem("userAuth");
  let userAuthObject = {};
  if (userAuthStore) {
    userAuthObject = JSON.parse(userAuthStore);
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
  ];

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

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-teal-950 fixed w-full ">
      <div className=" sm:px-6 lg:px-5">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400  hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              {/* <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span> */}
              {isOpen ? (
                <BaseButton className="h-6 w-6">
                  <BaseIcon iconName="crossIcon"></BaseIcon>
                </BaseButton>
              ) : (
                <BaseButton>
                  <BaseIcon iconName="hamBurger"></BaseIcon>
                </BaseButton>
              )}
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center sm:justify-between lg:justify-between">
            <div className="flex items-center">
              <Link to="/">
                <BrandLogo className="w-28" />
              </Link>

              <ul className=" hidden sm:block lg:flex gap-3">
                <DefaultAddressSlider>
                  <li>
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
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex items-center gap-2">
                {navLinks.map((elements, index) => {
                  return (
                    <li className="flex" key={"navbar" + index}>
                      <BaseNavLink to={elements.to} variant="headerLink">
                        {elements.name}
                      </BaseNavLink>
                    </li>
                  );
                })}
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
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
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
                      <h1 className="px-4 py-1 font-semibold text-left">
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
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        {isOpen && (
          <div className=" px-2 pb-3 pt-2">
            <ul className="flex gap-3 justify-center">
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
            {navLinks.map((elements, index) => {
              return (
                <li className="flex" key={"navbar" + index}>
                  <BaseNavLink to={elements.to} variant="headerLink">
                    {elements.name}
                  </BaseNavLink>
                </li>
              );
            })}
            <Link>
              <DefaultCartSlider>
                <BaseButton
                  variant="transparent"
                  className="text-white p-2 relative flex items-center gap-1"
                >
                  Cart
                  {totalQuantity ? (
                    <span className="tetx-white absolute top-0 right-0 bg-red-700 rounded-full px-1 text-sm">
                      {totalQuantity}
                    </span>
                  ) : null}
                </BaseButton>
              </DefaultCartSlider>
            </Link>
            {/* <Link
            to="/sign-up"
            className="flex items-center rounded-md py-2 px-4 bg-white hover:bg-teal-600"
          >
            <span>Sign Up</span>
          </Link> */}
          </div>
        )}
      </div>
    </nav>
  );
}
export default BaseNavbarCopy;
