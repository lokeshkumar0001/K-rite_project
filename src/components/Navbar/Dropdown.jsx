import React, { useState } from "react";
import { MdFolderOpen } from "react-icons/md";
import { BiSolidUpArrow } from "react-icons/bi";

const Dropdown = ({ btn, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="rounded-md">
      <div
        className="flex items-center justify-between p-1 cursor-pointer rounded-md hover:bg-gray-100"
        onClick={handleToggle}
      >
        <div className="dropdown_btn flex gap-1 items-center">
          <MdFolderOpen />
          <span className="font-semibold">{btn}</span>
        </div>
        <BiSolidUpArrow
          fontSize="0.8rem"
          color="gray"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </div>

      <div
        className={`dropdown_content px-4`}
        style={{
          maxHeight: isOpen ? "200px" : "0",
          overflow: "hidden",
          transition: "max-height 0.2s ease-out",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {options &&
          options.map((option, index) => <span key={index}>{option}</span>)}
      </div>
    </li>
  );
};

export default Dropdown;
