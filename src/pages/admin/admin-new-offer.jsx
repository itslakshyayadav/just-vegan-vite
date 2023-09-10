import BaseButton from "@/components/base-components/BaseButton";
import offerService from "@/services/offerService";
import { useState } from "react";
import { toast } from "react-toastify";

function AdminNewOffer() {
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

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await offerService.createOffer(offers);
      if (response.status == 200) {
        toast.success("A new offer created successfully.");
      }
    } catch (error) {
      if (error.response.status === 400) {
        toast.error(error.response.data);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container m-auto py-4 max-w-screen-md p-2">
          <div className="  px-5 py-3 ">
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
            <div className=" flex gap-3">
              <BaseButton variant="primary" type="submit">
                Submit
              </BaseButton>
              <BaseButton type="submit" variant="neutral">
                Cancel
              </BaseButton>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
export default AdminNewOffer;
