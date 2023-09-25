import { API_BASE_PATH } from "@/helpers/constants";
import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";
export default function OfferDetails() {
  let params = useParams();
  const [offerDetails, setOfferDetails] = useState({});
  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch(`${API_BASE_PATH}/offers/${params.offerId}`);
      const data = await response.json();
      setOfferDetails(data.payload);
    };
    fetchUserData();
  }, []);
  return (
    <div className=" px-5 py-5">
      <div className="flex gap-4 justify-center">
        <div className="">
          <img
            src={offerDetails.imgUrl}
            className="w-80 h-80 object-cover object-center rounded-lg"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-lg font-bold">{offerDetails.offerName}</h1>
          <p>{offerDetails.offerCode}</p>
          <p>{offerDetails.offerDescription}</p>
        </div>
      </div>
    </div>
  );
}
