import React from "react";

const CardOffers = (props) => {
  console.log(props);
  const { element, copyText } = props;
  return (
    <>
      <div key={element}>
        <div className="mt-6 max-w-xs hover:shadow-xl  border-2 border-black-600	p-4  bg-blue-50  min-h-120 max-h-120 ">
          <div className="text-right mb-2.5">
            <span className="bg-red-500 text-white text-sm  mr-2 px-2.5 py-0.5 rounded ">
              {!element.offerName
                ? "API does not have offername "
                : element.offerName}
            </span>
          </div>

          <img
            src={element.imgUrl}
            alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
            className=" object-cover object-center mb-2.5  "
          />
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
    </>
  );
};
export default CardOffers;
