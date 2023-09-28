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

export default function BaseNavbar(props) {
  const { selectOption } = props;
  const { user } = useContext(UserContext);

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
    <div className="flex h-16 w-full z-10">
      <nav className="bg-teal-950 flex justify-between items-center p-2 fixed top-0 w-full px-5">
        <div className="flex gap-10 items-center">
          <Link to="/">
            <BrandLogo className="w-14" />
          </Link>
          <ul className="flex gap-3">
            <DefaultAddressSlider>
              <li className=" ">
                <BaseButton
                  variant="transparent"
                  className="flex items-center gap-1 text-white"
                >
                  {user &&
                    user.defaultAddress &&
                    user.defaultAddress.addressLine}
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
            <Link to="/">
              <DefaultCartSlider>
                <BaseButton
                  variant="transparent"
                  className="text-white p-2 flex items-center gap-1"
                >
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
              <Dropdown options={options}>
                <div className="flex flex-col gap-1 py-1">
                  <h1 className="px-4 py-1 font-medium text-left">
                    <small>Hello {userAuthObject.name}</small>
                  </h1>
                  <hr />
                  {options.map((option, index) => {
                    return (
                      <Link
                        to={option.to}
                        onClick={selectOption}
                        key={index}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      >
                        {option.name}
                      </Link>
                    );
                  })}
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
  );
}
