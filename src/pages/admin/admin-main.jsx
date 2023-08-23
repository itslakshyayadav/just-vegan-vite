import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function AdminMain() {
  const navLinks = [
    {
      name: "New Dish",
      to: "new-dish",
    },
    {
      name: "Admin Dishes",
      to: "admin-dishes",
    },
    {
      name: "Admin Offers",
      to: "admin-offer",
    },
  ];

  return (
    <div className="container mx-auto max-w-4xl lg:max-w-6xl my-6 px-4 md:px-6">
      <div className="flex gap-8 items-center">
        <ul className="flex gap-3">
          {navLinks.map((link, index) => {
            return (
              <li key={"navbar" + index}>
                <Link to={link.to} className="py-3 px-5 border">
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
