import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_BASE_PATH } from "@/helpers/constants";
import AddressTile from "@/components/page-components/AddressTile";

export default function MyAddress() {
  const [myAddresses, setMyAddresses] = useState([]);
  const fetchUser = async () => {
    const userAuthStore = localStorage.getItem("userAuth");
    const userAuthObject = JSON.parse(userAuthStore);
    const response = await fetch(
      `${API_BASE_PATH}/users/${userAuthObject.userId}`,
      {
        headers: {
          Authorization: `Bearer ${userAuthObject.accessToken}`,
        },
      }
    );
    const data = await response.json();
    if (data.payload.addresses) {
      setMyAddresses(data.payload.addresses);
    }
  };

  // const editAddress = async (addressId) => {
  //   try {
  //     const response = await userService.editAddress(addressId);
  //     if (response.status === 200) {
  //       toast.success("Address edit successfully !");
  //     }
  //   } catch (error) {
  //     console.log("error");
  //   }
  // };

  useEffect(() => {
    fetchUser();
  }, []);

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
      {myAddresses.map((address, index) => {
        return <AddressTile addressRecord={address} key={index}></AddressTile>;
      })}
    </div>
  );
}
