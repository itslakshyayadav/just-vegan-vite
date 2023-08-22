import { Link } from "react-router-dom";
import justVeganLogo from "../../assets/logo/just-vegan.png";

export default function BaseNavbar() {
  const userAuthStore = localStorage.getItem("userAuth");
  const userAuthObject = JSON.parse(userAuthStore);
  console.log(userAuthObject.name);

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
      name: " Admin Dishes",
      to: "admin-dish",
    },
    {
      name: "Admin Offers",
      to: "offercard-admin",
    },
  ];

  return (
    <nav className="bg-neutral-950 flex justify-between items-center p-2">
      <div className="flex gap-8 items-center">
        <Link to="/">
          <img className="w-16" src={justVeganLogo} alt="logo" />
        </Link>
        <ul className="flex gap-3">
          {navLinks.map((elements, index) => {
            return (
              <li key={"navbar" + index}>
                <Link to={elements.to} className=" py-3 px-5 text-white">
                  {elements.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex gap-2">
        <button type="button" className="bg-neutral-100 px-6 py-3 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </button>

        <a href="login">
          <button
            src="login"
            type="button"
            className="bg-neutral-100 px-6 py-3 rounded-lg"
          >
            {userAuthObject.name ?? "Login"}
          </button>
        </a>

        <a href="sign-up">
          <button type="button" className="bg-neutral-100 px-6 py-3 rounded-lg">
            Sign up
          </button>
        </a>
      </div>
    </nav>
  );
}
