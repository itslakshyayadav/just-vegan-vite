import { useEffect, useState } from "react";
import { API_BASE_PATH } from "@/helpers/constants";
// import BaseButton from "@/components/base-components/BaseButton";
import { useNavigate, Link } from "react-router-dom";

export default function MyAddress() {
  const [myAddress, setMyAddress] = useState([]);

  const navigate = useNavigate();

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
    console.log(data);
    setMyAddress(data.payload.addresses);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  // const newAddress = () => {
  //   console.log("newAddress called");
  //   navigate("/my-account/my-address/create-address");
  // };

  return (
    <>
      {
        // <BaseButton type="submit" variant="primary" onClick={newAddress}>
        //   New Address
        // </BaseButton>
        <Link
          to="/my-account/my-address/create-address"
          className="py-2 px-4 border rounded-md"
        >
          Create Address
        </Link>
      }
      {myAddress.map((element, index) => {
        return (
          <div key={"address" + index}>
            <form className="">
              <div className="container  border-2 m-auto mb-2 rounded-md   max-w-screen-md ">
                <div className=" rounded-sm  ">
                  <div
                    className="flex  justify-between border-b-2 px-3 py-3 items-center"
                    style={{ backgroundColor: "rgb(247,247,247)" }}
                  >
                    <div>
                      <h1>{element.addressType}</h1>
                    </div>
                    <div>
                      <button
                        className="px-3 py-1  text-white  rounded-sm"
                        type="submit"
                        style={{ backgroundColor: "rgb(83,197,8)" }}
                      >
                        Edit
                      </button>
                    </div>
                  </div>

                  <h1 className=" font-bold py-2 px-3">{element.name}</h1>

                  <h1 className=" font-semibold  py-1 px-3">
                    {element.addressLine}
                  </h1>
                </div>
              </div>
            </form>
          </div>
        );
      })}
    </>
  );
}
