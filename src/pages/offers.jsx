import { useState, useEffect } from "react";
import CardOffers from "./cards-offer";

function Offers() {
  const [offers, setOffers] = useState([]);

  const copyText = (offValue) => {
    // let text = document.getElementById("cpnCode");
    navigator.clipboard.writeText(offValue);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch("http://192.168.29.179:3001/offers");
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
