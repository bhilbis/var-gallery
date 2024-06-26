import React from "react";
import Image from "next/image";
import arrowUp from "../../../public/assets/arrow-up.svg";
import logo1 from "../../../public/assets/Var.svg";

const functionNav = [
  {
    nameText: "Members",
    id: "#members",
  },
  {
    nameText: "Projects",
    id: "#projects",
  },
  {
    nameText: "Service",
    id: "#service",
  },
  {
    nameText: "Let's Talk",
    id: "#service",
  },
];

const Navbar = () => {
  return (
    <>
      <div className="top-11 z-20 absolute flex justify-center w-full">
        <Image src={logo1} width={150} alt="logo" />
      </div>
      <div className="fixed z-20 text-center bottom-0 w-full flex justify-center">
        <div className="bg-[#101D1F] my-10 text-white rounded-full">
          <nav className="inline-flex items-center py-1 px-2 justify-between space-x-4">
            <button
              title="arrow up"
              type="button"
              className="bg-[#AAC8CD] w-[40px] h-[40px] rounded-full flex items-center justify-center"
            >
              <Image src={arrowUp} width={20} alt="arrow-up" />
            </button>
            {functionNav.map((item, index) => (
              <a
                key={index}
                href={item.id}
                className="py-1 px-2 text-[16px] font-[500] rounded-full hover:bg-[#AAC8CD] transition-colors duration-300"
              >
                {item.nameText}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
