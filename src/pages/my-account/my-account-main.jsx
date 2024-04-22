import BaseIcon from "@/components/base-components/BaseIcon";
import BaseNavLink from "@/components/base-components/BaseNavLink";
import { Outlet } from "react-router-dom";
import { ICONS } from "@/helpers/constants";

export default function MyAccountMain() {
  const accountPage = [
    {
      name: "My Account",
      to: "/my-account",
      iconName: ICONS.User,
    },
    {
      name: "My Address",
      to: "/my-account/my-address",
      iconName: ICONS.MapPin,
    },
    {
      name: "My Orders",
      to: "/my-account/my-orders",
      iconName: "bag",
    },
    {
      name: "My Favourite",
      iconName: ICONS.Heart,
      to: "/my-account/my-favourite",
    },
    {
      name: "My Reviews",
      to: "/my-account/my-reviews",
      iconName: ICONS.Star,
    },
  ];
  return (
    <>
      <div className="container mx-auto max-w-4xl lg:max-w-6xl my-6 px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="w-full md:w-48 divide-y flex flex-col">
            {accountPage.map((link, index) => (
              <BaseNavLink
                to={link.to}
                end
                key={"account-links" + index}
                variant="accountLink"
                className="p-3 md:px-3"
              >
                <div className="flex gap-2 items-center">
                  <BaseIcon iconName={link.iconName}></BaseIcon>
                  <span>{link.name}</span>
                </div>
              </BaseNavLink>
            ))}
          </div>
          <div className="w-full md:flex">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
}
