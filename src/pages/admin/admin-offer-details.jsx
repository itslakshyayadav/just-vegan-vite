import { useState, useEffect } from "react";
import { API_BASE_PATH } from "@/helpers/constants";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function AdminOfferDetails() {
  const [offerModel, setOfferModel] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOfferDetails = async () => {
      const response = await fetch(
        `${API_BASE_PATH}/offers/${params.offerId}`
      ).then((response) => response.json());
      setOfferModel(response.payload);
    };
    fetchOfferDetails();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setOfferModel({
      ...offerModel,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`${API_BASE_PATH}/offers/${params.offerId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(offerModel),
    })
      .then((res) => res.json())
      .then(console.log);
    toast("Offer Update.");
    navigate("/admin/admin-offers");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container m-auto py-4 max-w-screen-md p-2">
          <div className="  px-5 py-3 ">
            <div>
              <h1 className="text-center font-semibold text-gray-700 text-3xl">
                offer Detail
              </h1>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="offerName">offerName *</label>
              <input
                name="offerName"
                value={offerModel.offerName}
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
                value={offerModel.offerCode}
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
                  value={offerModel.maxDiscount}
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
                    value={offerModel.minPurchase}
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
                    value={offerModel.discountAmount}
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
                    value={offerModel.discountPercent}
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
                value={offerModel.offerDescription}
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
                value={offerModel.imgUrl}
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
                Update
              </button>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
export default AdminOfferDetails;
