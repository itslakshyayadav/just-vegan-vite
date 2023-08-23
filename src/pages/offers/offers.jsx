import { useState, useEffect } from "react";
import CardOffers from "./cards-offer";
import { API_BASE_PATH } from "../helpers/constants";

function Offers() {
  const [offers, setOffers] = useState([]);

  const copyText = (offValue) => {
    // let text = document.getElementById("cpnCode");
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
      <div className="conatiner justify-center flex flex-wrap gap-5 border-2 px-5">
        {offers.map((element) => {
          return (
            <>
              <CardOffers element={element} copyText={copyText}></CardOffers>
            </>
          );
        })}
      </div>
    </>
  );
}
export default Offers;
