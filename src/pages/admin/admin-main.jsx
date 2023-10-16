// import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function AdminMain() {
  const navLinks = [
    {
      name: "New Dish",
      to: "/admin/new-dish",
    },
    {
      name: "Admin Dishes",
      to: "/admin/admin-dishes",
    },
    {
      name: "New Offer",
      to: "/admin/new-offer",
    },
    {
      name: "Admin Offers",
      to: "/admin/admin-offers",
    },
  ];

  return (
    <div className="container mx-auto max-w-4xl lg:max-w-6xl my-6 px-4 md:px-6">
      <div className="flex  gap-8 items-center">
        <ul className="flex flex-wrap gap-3">
          {navLinks.map((link, index) => {
            return (
              <li key={"navbar" + index}>
                <Link to={link.to} className="py-2 px-4 border rounded-md">
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <Outlet></Outlet>
    </div>
  );
}
