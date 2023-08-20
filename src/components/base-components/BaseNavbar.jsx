import { Link } from "react-router-dom";
import justVeganLogo from "../../assets/logo/just-vegan.png";

export default function BaseNavbar() {
  return (
    <nav className="bg-neutral-950 flex justify-between items-center p-2">
      <div className="flex gap-8 items-center">
        <Link to="/">
          <img className="w-16" src={justVeganLogo} alt="logo" />
        </Link>
        <ul className="flex gap-3">
          <li>
            <Link to="/dishes" className="border py-3 px-5 text-white">
              Dishes
            </Link>
          </li>
          <li>
            <Link to="/offers" className="border py-3 px-5 text-white">
              Offers
            </Link>
          </li>
          <li>
            <Link to="/admin-dish" className="border py-3 px-5 text-white">
              Admin Dishes
            </Link>
          </li>
          <li>
            <Link to="/offercard-admin" className="border py-3 px-5 text-white">
              Admin Offers
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex gap-2">
        <button type="button" className="bg-neutral-100 px-6 py-3 rounded-lg">
          Cart
        </button>
        <button type="button" className="bg-neutral-100 px-6 py-3 rounded-lg">
          Login
        </button>
        <button type="button" className="bg-neutral-100 px-6 py-3 rounded-lg">
          Sign up
        </button>
      </div>
    </nav>
  );
}
