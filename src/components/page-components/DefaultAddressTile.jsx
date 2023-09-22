import { useContext } from "react";
import userService from "@/services/userService";
import BaseIcon from "../base-components/BaseIcon";
import { toast } from "react-toastify";
import { ICONS } from "@/helpers/constants";
import UserContext from "@/contexts/UserContext";

export default function DefaultAddressTile(props) {
  const { user, reFetchUser } = useContext(UserContext);
  const { address } = props;

  const handleSetDefaultAddress = async (id) => {
    try {
      const defaultAddressResponse = await userService.setDefaultAddress(id);
      if (defaultAddressResponse.status === 200) {
        await reFetchUser();
        toast.success("Default Address is set successfully.");
      }
    } catch (error) {
      toast.error("Error occurred, while setting default address.");
    }
  };

  return (
    <li className="flex gap-8 items-center px-5 py-3">
      {address.addressType === "home" ? (
        <BaseIcon iconName={ICONS.Home} className="w-6" />
      ) : (
        <BaseIcon iconName={ICONS.Office} className="w-6" />
      )}
      <div className="flex justify-between w-80">
        <div>
          <h1 className="text-xs uppercase">{address.addressType}</h1>

          <p className="text-neutral-800 font-medium">{address.addressLine}</p>
          {user.defaultAddress &&
          user.defaultAddress._id === address._id ? null : (
            <button
              type="button"
              onClick={() => {
                handleSetDefaultAddress(address._id);
              }}
              className="border rounded-md hover:bg-slate-100 w-24 py-1 px-2 mt-2"
            >
              Set Default
            </button>
          )}
        </div>
        <div>
          <span className="font-sans flex items-center h-5 uppercase font-semibold text-gray-500 rounded-xl px-3 mb-2">
            <small>
              {user.defaultAddress && user.defaultAddress._id === address._id
                ? "Default"
                : null}
            </small>
          </span>
        </div>
      </div>
    </li>
  );
}
