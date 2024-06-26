"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface AvatarLink {
  default: string;
  hover: string;
  name: string;
  role: string;
}

const avatarLinks: AvatarLink[] = [
  {
    default: "/assets/avatars/aldo.png",
    hover: "/assets/avatars/aldo2.png",
    name: "Aldo",
    role: "Designer",
  },
  {
    default: "/assets/avatars/levian.png",
    hover: "/assets/avatars/levian2.png",
    name: "Levian",
    role: "UI Designer",
  },
  {
    default: "/assets/avatars/bilbis.png",
    hover: "/assets/avatars/bilbis2.png",
    name: "Flexsy",
    role: "FE Developer",
  },
  {
    default: "/assets/avatars/galang.png",
    hover: "/assets/avatars/galang2.png",
    name: "Galang",
    role: "FE Developer",
  },
  {
    default: "/assets/avatars/agil.png",
    hover: "/assets/avatars/agil2.png",
    name: "Agil",
    role: "FE Developer",
  },
  {
    default: "/assets/avatars/rizki.png",
    hover: "/assets/avatars/rizki2.png",
    name: "Rizki",
    role: "BE Developer",
  },
  {
    default: "/assets/avatars/budi.png",
    hover: "/assets/avatars/budi2.png",
    name: "Budi",
    role: "BE Developer",
  },
  {
    default: "/assets/avatars/dava.png",
    hover: "/assets/avatars/dava2.png",
    name: "Dava",
    role: "BE Developer",
  },
  {
    default: "/assets/avatars/dewa.png",
    hover: "/assets/avatars/dewa2.png",
    name: "Dewa",
    role: "BE Developer",
  },
  {
    default: "/assets/avatars/alif.png",
    hover: "/assets/avatars/alif2.png",
    name: "Alif",
    role: "BE Developer",
  },
];

const Members: React.FC = () => {
  const [hovered, setHovered] = useState<AvatarLink | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
    <div className="px-[9rem] text-start">
    <div className="text-[46px] text-white">
      <p className="font-[500] mb-10">
        <span className="font-[700] underline underline-offset-8 decoration-white">With determination and hope</span>, we
        rise, <br /> leaving past flaws behind for a better <span className="italic">future</span>.
      </p>
      <p className="font-[500] ml-24">
        We are here to help you achieve your <span className="font-[700] underline underline-offset-8 decoration-white">dreams</span> <br />
        and <span className="font-[700] underline underline-offset-8 decoration-white">aspirations</span> through
        outstanding <span className="italic">design</span> <br /> and functionality.
      </p>
    </div>
  </div>

  <div className="flex flex-col items-center justify-center mt-10 pb-20">
        <div className="grid grid-cols-6 gap-x-[40px] gap-y-[50px] mb-10">
          {avatarLinks.map((link, index) => (
            <div
              key={index}
              className="w-[120px] h-[120px] relative group custom-cursor-hover"
              onMouseEnter={() => setHovered(link)}
              onMouseLeave={() => setHovered(null)}
            >
              <Image
                src={link.default}
                alt={`Avatar ${index + 1}`}
                width={120}
                height={120}
                className="object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0"
              />
              <Image
                src={link.hover}
                alt={`Avatar ${index + 1} hover`}
                width={120}
                height={120}
                className="object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100 absolute top-0 left-0"
              />
            </div>
          ))}
        <div className="col-span-2 col-start-5 flex justify-center mt-10">
          <button className="px-16 py-4 bg-blue-600 text-white text-lg font-bold rounded-full transform transition-transform duration-300 hover:scale-110 min-w-[200px]">
            Join Us
          </button>
        </div>
        </div>
        <div
          className="fixed pointer-events-none z-50 flex items-center"
          style={{ left: `${cursorPosition.x + 20}px`, top: `${cursorPosition.y + 15}px`, display: hovered ? "flex" : "none" }}
        >
          <div className="bg-[#101D1F] text-white p-2 rounded">
            <p className="">{hovered?.name} | {hovered?.role}</p>
          </div>
        </div>
      </div>
  </>
  );
};

export default Members
