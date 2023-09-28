// import { useState } from "react";
export default function BaseSlider(props) {
  const { children } = props;

  const closeSlider = () => {
    if (props.onCloseSlider && typeof props.onCloseSlider == "function") {
      props.onCloseSlider();
    }
  };

  return (
    <>
      <div
        className="relative z-10"
        aria-labelledby="slide-over-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          className="fixed inset-0 bg-neutral-50 bg-opacity-75 transition-opacity"
          onClick={closeSlider}
        ></div>

        {/* <div className="fixed inset-0 overflow-hidden"> */}
        {/* <div className="absolute inset-0 overflow-hidden"> */}
        <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full ">
          <div className="pointer-events-auto relative w-screen max-w-md">
            <div className="flex h-full flex-col overflow-y-auto bg-white  shadow-xl">
              {children}
            </div>
          </div>
        </div>
        {/* </div> */}
        {/* </div> */}
      </div>
    </>
  );
}
