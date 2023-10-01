import { useState, useEffect, useRef } from "react";
import BaseIcon from "./base-components/BaseIcon";

const Dropdown = ({ options, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  // const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // const selectOption = (option) => {
  //   setSelectedOption(option);
  //   setIsOpen(false);
  // };
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="text-white gap-2 py-2 px-4  inline-flex items-center"
          onClick={toggleDropdown}
        >
          <span>{"My Profile"}</span>

          {isOpen ? (
            <BaseIcon iconName="uparrow" className="w-4"></BaseIcon>
          ) : (
            <BaseIcon iconName="downarrow" className="w-4"></BaseIcon>
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
