import { useState } from "react";

function OfferCardAdmin() {
  const [offers, setOffers] = useState({
    offerName: "",
    offerDescription: "",
    minPurchase: "",
    maxDiscount: "",
    discountPercent: "",
    discountAmount: "",

    offerCode: "",
    imgUrl: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setOffers({
      ...offers,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://192.168.29.179:3001/offers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(offers),
    })
      .then((res) => res.json())
      .then(console.log);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container m-auto py-4 max-w-screen-md p-2">
          <div className="  rounded-sm px-5 py-3 ">
            <div>
              <h1 className="text-center font-semibold text-gray-700 text-3xl">
                Offers Admin
              </h1>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="offerName">offerName *</label>
              <input
                name="offerName"
                value={offers.offerName}
                onChange={handleChange}
                type="text"
                required
                placeholder="offerName"
                className=" px-2 py-1 border-2 rounded-sm mb-2.5"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="dishCategory">offerCode*</label>
              <input
                name="offerCode"
                required
                value={offers.offerCode}
                onChange={handleChange}
                type="text"
                placeholder="offerCode"
                className=" px-2 py-1 border-2 rounded-sm mb-2.5"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 mb-6 gap-4">
              <div className=" flex flex-col gap-1 ">
                <label htmlFor="maxDiscount">maxDiscount</label>
                <input
                  name="maxDiscount"
                  placeholder="maxDiscount"
                  type="number"
                  value={offers.maxDiscount}
                  onChange={handleChange}
                  className=" px-2 py-1 border-2 rounded-sm "
                />
              </div>
              <div>
                <div className=" flex flex-col gap-1 ">
                  <label htmlFor="minPurchase">minPurchase</label>
                  <input
                    placeholder="minPurchase"
                    name="minPurchase"
                    value={offers.minPurchase}
                    onChange={handleChange}
                    type="number"
                    className=" px-2 py-1 border-2 rounded-sm "
                  />
                </div>
              </div>
              <div className="">
                <div className=" flex flex-col gap-1 ">
                  <label htmlFor="discountAmount">discountAmount</label>
                  <input
                    placeholder="discountAmount"
                    name="discountAmount"
                    value={offers.discountAmount}
                    onChange={handleChange}
                    type="number"
                    className="px-2 py-1 border-2 rounded-sm"
                  />
                </div>
              </div>
              <div>
                <div className=" flex flex-col gap-1 ">
                  <label htmlFor="discountPercent">discountPercent</label>
                  <input
                    placeholder="discountPercent"
                    name="discountPercent"
                    value={offers.discountPercent}
                    onChange={handleChange}
                    type="number"
                    className="px-2 py-1 border-2 rounded-sm"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="offerDescription">Description</label>
              <input
                name="offerDescription"
                type="text"
                placeholder="offerDescription"
                value={offers.offerDescription}
                onChange={handleChange}
                className=" px-2 py-1 border-2 rounded-sm mb-2.5"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="imgUrl">Image Url</label>
              <input
                type="text"
                placeholder="imgUrl"
                name="imgUrl"
                required
                value={offers.imgUrl}
                onChange={handleChange}
                className=" px-2 py-1 border-2 rounded-sm mb-2.5"
              />
            </div>
            <div className="">
              <button
                className="px-5 py-3 my-5 text-white  rounded-md"
                type="submit"
                style={{ backgroundColor: "rgb(83,197,8)" }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
export default OfferCardAdmin;
