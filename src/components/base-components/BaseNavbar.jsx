import { Link } from "react-router-dom";
import BrandLogo from "@/components/base-components/BrandLogo";

export default function BaseNavbar() {
  const userAuthStore = localStorage.getItem("userAuth");
  let userAuthObject = {};
  if (userAuthStore) {
    userAuthObject = JSON.parse(userAuthStore);
    console.log(userAuthObject.name);
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
    <nav className="bg-zinc-950 flex justify-between items-center p-2">
      <div className="flex gap-8 items-center">
        <Link to="/">
          <BrandLogo />
        </Link>
        <ul className="flex gap-3">
          {navLinks.map((elements, index) => {
            return (
              <li key={"navbar" + index}>
                <Link
                  to={elements.to}
                  className=" py-3 px-5 text-white md:hover:text-green-500"
                >
                  {elements.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex gap-2">
        <a href="" className="bg-lime-500 px-6 py-3 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </a>

        {userAuthObject && userAuthObject.accessToken ? (
          <>
            <Link
              to="/login"
              className="bg-lime-500 text-white px-6 py-3 rounded-lg"
            >
              {userAuthObject.name}
            </Link>
            <Link
              to="/login"
              onClick={handleLogout}
              className="bg-lime-500 text-white px-6 py-3 rounded-lg"
            >
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="bg-lime-500 text-white px-6 py-3 rounded-lg"
            >
              Login
            </Link>
            <Link
              to="/sign-up"
              className="bg-lime-500 text-white px-6 py-3 rounded-lg"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
