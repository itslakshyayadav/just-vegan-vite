import { useEffect, useState } from "react";
import { API_BASE_PATH } from "@/helpers/constants";

// import BaseButton from "@/components/base-components/BaseButton";
import { Link } from "react-router-dom";
import userService from "@/services/userService";
import { toast } from "react-toastify";
// import BaseIcon from "@/components/base-components/BaseIcon";

export default function MyAddress() {
  const [myAddress, setMyAddress] = useState([]);
  let addressDetails;
  // const navigate = useNavigate();

  const fetchUser = async () => {
    const userAuthStore = localStorage.getItem("userAuth");
    const userAuthObject = JSON.parse(userAuthStore);
    console.log(`userAuthStore`);
    console.log(userAuthObject);
    const response = await fetch(
      `${API_BASE_PATH}/users/${userAuthObject.userId}`,
      {
        headers: {
          Authorization: `Bearer ${userAuthObject.accessToken}`,
        },
      }
    );
    const data = await response.json();
    addressDetails = data.payload.addresses;
    console.log("addressDetails", addressDetails);
    console.log(data);
    setMyAddress(data.payload.addresses);
  };

  const removeAddress = async (addressId) => {
    try {
      const response = await userService.removeAddress(addressId);
      if (response.status === 200) {
        toast.success("Address removed successfully !");
      }
    } catch (error) {
      console.log("error");
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
              className="py-2 px-4 border text-indigo-800 font-sans rounded-md "
            >
              + Create Address
            </Link>
          }
        </div>
      </div>
      {myAddress.map((element, index) => {
        return (
          <div key={"address" + index} className="">
            <form className="">
              <div className="  border border-slate-200 border-t-slate-100 m-auto mb-2 hover:shadow-md    ">
                <div className=" rounded-sm px-3 py-2 ">
                  <div className="flex justify-between items-center">
                    <h1 className=" font-sans font-bold ">{element.name}</h1>
                    <span className="font-sans flex items-center h-5 border uppercase bg-slate-100 font-semibold text-gray-500 rounded-xl   px-1">
                      <small>{element.addressType}</small>
                    </span>
                  </div>

                  <h1 className="font-sans">
                    <small>{element.addressLine}</small>
                  </h1>
                  <h1 className="font-sans">
                    <small>{element.city}</small>
                  </h1>
                  <h1 className="font-sans">
                    <small>{element.pincode}</small>
                  </h1>
                  <h1 className="font-sans">
                    <small>{element.state}</small>
                  </h1>
                  <h1 className="font-sans mt-2">
                    <small>{element.phone1}</small>
                  </h1>

                  <div className="flex border-t border-slate-200  justify-between md:flex-none mt-2 px-3 py-3 items-center">
                    <div className="flex justify-center w-1/2 border-r border-slate-200 ">
                      <button
                        className="px-32 font-sans py-2 border text-indigo-800 rounded-sm"
                        type="submit"
                        onClick={() => {
                          removeAddress(element._id);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                    <div className="flex justify-center w-1/2 ">
                      <button
                        // to="/userId/address/addressId"
                        className="px-32 font-sans py-2 border text-indigo-800 rounded-sm"
                        type="submit"
                        // onClick={() => {
                        //   editAddress(element._id);
                        // }}
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        );
      })}
    </div>
  );
}
