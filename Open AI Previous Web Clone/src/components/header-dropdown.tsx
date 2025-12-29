"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

import CustomIcon from "@components/custom-icons";

type Props = {
  buttonName: string;
  dropdownLinks: object[];
};

export default function HeaderDropdownButton({
  buttonName,
  dropdownLinks,
}: Props) {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleButtonClick = () => {
    setOpenDropdown(!openDropdown);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpenDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full relative" ref={dropdownRef}>
      <button
        className={`flex flex-row items-center ${
          openDropdown
            ? "underline underline-offset-4"
            : "hover:underline hover:underline-offset-4"
        }`}
        onClick={handleButtonClick}
      >
        <span className="pb-1">{buttonName}</span>
        <CustomIcon
          iconName="dropDownArrow"
          className={`${openDropdown ? " rotate-180" : ""}`}
        />
      </button>
      <ul
        className={`${
          openDropdown ? "w-full absolute top-10 flex flex-col" : "hidden"
        }`}
      >
        {dropdownLinks.map((link, index) => (
          <li key={index}>
            <Link href={link.link} className="flex flex-row items-center">
              <span className="whitespace-nowrap hover:underline hover:underline-offset-4">
                {link.name}
              </span>
              {/* {link.showArrow && <CustomIcon iconName="arrow" />} */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
