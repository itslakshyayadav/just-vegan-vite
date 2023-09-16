// import { useState } from "react";
export default function BaseSlider(props) {
  const { children } = props;
  //   const [isClose, setIsClose] = useState(false);

  //   const openModal = () => {
  //     isClose(false);
  //   };

  //   const closeModal = () => {
  //     setIsClose(false);
  //   };

  return (
    <>
      <div
        className="relative z-10"
        aria-labelledby="slide-over-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full ">
              <div className="pointer-events-auto relative w-screen max-w-md">
                <div className="flex h-full flex-col overflow-y-auto bg-white py-6 shadow-xl">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
