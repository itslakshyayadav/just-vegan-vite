import { Link, Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="flex gap-3  bg-red-900 px-2 py-2">
        <Link to="/blog" className="border py-3 px-5 text-white">
          Admin-Form
        </Link>
        <Link to="/dishes" className="border py-3 px-5 text-white">
          Dishes
        </Link>
      </div>
      <div className="container mx-auto">
        <Outlet></Outlet>
      </div>
    </>
  );
}
