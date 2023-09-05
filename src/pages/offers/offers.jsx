import { useState, useEffect } from "react";
// import CardOffers from "./cards-offer";
import { API_BASE_PATH } from "@/helpers/constants";
import { Link } from "react-router-dom";

function Offers() {
  const [offers, setOffers] = useState([]);

  const copyText = (offValue) => {
    navigator.clipboard.writeText(offValue);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch(`${API_BASE_PATH}/offers`);
      const data = await response.json();
      console.log(data);
      setOffers(data.payload);
    };
    fetchUserData();
  }, []);

  return (
    <>
      <div className="container mx-auto max-w-4xl lg:max-w-6xl my-6 px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-3">
          {offers.map((element, index) => {
            return (
              <div key={element + index}>
                <div className="mt-6 max-w-xs hover:shadow-xl  border-2 border-black-600	p-4  bg-blue-50  min-h-120 max-h-120 ">
                  <div className="text-right mb-2.5">
                    <span className="bg-red-500 text-white text-sm  mr-2 px-2.5 py-0.5 rounded ">
                      {!element.offerName
                        ? "API does not have offername "
                        : element.offerName}
                    </span>
                  </div>
                  <Link to={`/offers/${element._id}`}>
                    <img
                      src={element.imgUrl}
                      alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                      className=" object-cover object-center w-full h-40 mb-2.5  "
                    />
                  </Link>
                  <div className="mb-2.5">
                    <h3 className=" font-semibold text-gray-900  ">
                      Description :{" "}
                      {!element.offerDescription
                        ? "applicable"
                        : element.offerDescription}
                    </h3>

                    <div className="mb-2">
                      <span className="bg-green-500 text-white text-sm  mr-2 px-2.5 py-0.5 rounded ">
                        MaxDiscount :{" "}
                        {!element.maxDiscount ? "10 " : element.maxDiscount} Rs
                      </span>
                    </div>
                    <div className="">
                      <span className="bg-green-500 text-white text-sm  mr-2 px-2.5 py-0.5 rounded ">
                        MinPurchase :{" "}
                        {!element.minPurchase ? "50" : element.minPurchase} RS
                      </span>
                    </div>
                  </div>
                  <div className="w-56 m-auto flex justify-around border-dashed border border-black	">
                    <span
                      id="cpnCode"
                      className="border-r	px-4 border-dashed border-black"
                    >
                      {!element.offerCode ? "LSKY50" : element.offerCode}
                    </span>
                    <button
                      type="button"
                      onClick={() => copyText(element.offerCode)}
                      className="w-40 bg-blue-700  hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                    >
                      Copy Code
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Offers;
