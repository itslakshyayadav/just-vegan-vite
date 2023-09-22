import { useContext } from "react";
import { Link } from "react-router-dom";
import AddressTile from "@/components/page-components/AddressTile";
import UserContext from "@/contexts/UserContext";

export default function MyAddress() {
  const { user } = useContext(UserContext);

  return (
    <div className="border-2 border-slate-100  py-5 px-5">
      <div className=" container  flex justify-between mb-5 ">
        <div>Saved Addresses</div>
        <div>
          {
            <Link
              to="/my-account/my-address/create-address"
              className="py-2 px-4 border font-bold text-xs text-indigo-800 font-sans rounded-md "
            >
              + CREATE NEW ADDRESS
            </Link>
          }
        </div>
      </div>
      {user.addresses &&
        user.addresses.map((address, index) => {
          return (
            <AddressTile addressRecord={address} key={index}></AddressTile>
          );
        })}
    </div>
  );
}
