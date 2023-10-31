import { Link, Outlet } from "react-router-dom";
import UserContext from "@/contexts/UserContext";
import { useContext } from "react";

export default function AdminMain() {
  const { user } = useContext(UserContext);
  console.log(user);
  const navLinks = [
    {
      name: "Orders",
      to: "/admin/admin-orders",
      hint: "You can see all your orders here.",
      imagePath: "https://cdn-icons-png.flaticon.com/512/3566/3566406.png",
    },
    {
      name: "Admin Dishes",
      to: "/admin/admin-dishes",
      hint: "You can update dish here",
      imagePath: "https://cdn-icons-png.flaticon.com/512/1688/1688988.png",
    },
    {
      name: "Admin Offers",
      to: "/admin/admin-offers",
      hint: "You can update offers here",
      imagePath:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdo341Bd2PpX80mIV885u90dLzn-Y6WzF8yQ&usqp=CAU",
    },
    {
      name: "New Dish",
      to: "/admin/new-dish",
      hint: "You can create new dish here",
      imagePath: "https://cdn-icons-png.flaticon.com/512/5124/5124774.png",
    },
    {
      name: "New Offer",
      to: "/admin/new-offer",
      hint: "You can create new offer here",
      imagePath: "https://cdn-icons-png.flaticon.com/512/3179/3179765.png",
    },
  ];

  return (
    <div className="container mx-auto  lg:max-w-6xl my-6 px-4 md:px-6">
      <div className="flex gap-8 flex-col">
        <h1 className="text-3xl text-neutral-800">Hi {user.name} !</h1>
        <ul className="flex items-center flex-wrap gap-3">
          {navLinks.map((link, index) => {
            return (
              <li
                key={"navbar" + index}
                className="flex  flex-col gap-3 p-6 border rounded-md"
              >
                <div className="flex justify-center">
                  <img className="max-w-[10rem]" src={link.imagePath} alt="" />
                </div>
                <p className="text-neutral-700">{link.hint}</p>

                <div className="flex justify-center">
                  <Link
                    to={link.to}
                    className="py-2 px-4 flex items-center gap-1 border rounded-md hover:bg-slate-100"
                  >
                    {link.name}
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <Outlet></Outlet>
    </div>
  );
}
