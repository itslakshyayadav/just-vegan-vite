import { useState } from "react";
import BaseIcon from "./base-components/BaseIcon";

const Dropdown = ({ options, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="text-white  py-2 px-4  inline-flex items-center"
          onClick={toggleDropdown}
        >
          <span>{"My Profile"}</span>

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
