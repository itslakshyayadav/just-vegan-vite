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
      name: "MyFavourite",
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
        <div className="flex gap-3  ">
          <div className="shrink-0  divide-y flex flex-col ">
            {accountPage.map((link, index) => {
              return (
                <BaseNavLink
                  to={link.to}
                  end
                  key={"account-links" + index}
                  variant="accountLink"
                >
                  <div className="flex gap-2 items-center">
                    <BaseIcon iconName={link.iconName}></BaseIcon>
                    <span>{link.name}</span>
                  </div>
                </BaseNavLink>
              );
            })}
          </div>
          <div className="grow   ">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
}
