import { useState } from "react";
import BaseIcon from "./base-components/BaseIcon";
import { Link } from "react-router-dom";

const Dropdown = ({ options, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const userAuthStore = localStorage.getItem("userAuth");
  let userAuthObject = {};
  if (userAuthStore) {
    userAuthObject = JSON.parse(userAuthStore);
    // console.log(userAuthObject.name);
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  console.log(options);
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="text-white  py-2 px-4  inline-flex items-center"
          onClick={toggleDropdown}
        >
          <span>{userAuthObject.name}</span>

          {isOpen ? (
            <BaseIcon iconName="uparrow"></BaseIcon>
          ) : (
            <BaseIcon iconName="downarrow"></BaseIcon>
          )}
        </button>
      </div>
      {isOpen && (
        <div className="z-10 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
