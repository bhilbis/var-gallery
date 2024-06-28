"use client";
import React, { useState, useEffect } from "react";
import Avatar from "./avatars";
import AvatarTooltip from "./avatarTooltip";
import Link from "next/link";

const avatarLinks = [
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
  const [hovered, setHovered] = useState<{ name: string; role: string } | null>(null);
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
            <Avatar
              key={index}
              link={link}
              onMouseEnter={() => setHovered({ name: link.name, role: link.role })}
              onMouseLeave={() => setHovered(null)}
            />
          ))}
          <div className="col-span-2 col-start-5 flex justify-center mt-10 text-white">
          <button
          type="button"
          title="serious"
          className="bg-[#101D1F] px-2 py-2 rounded-full "
        >
            <Link href={"/contacts"}>
          <div className="flex items-center">
            <div className="rounded-full bg-[#AAC8CD] mr-4 p-8 flex justify-center"></div>
            <h1 className="pl-2 pr-4">Join Us?</h1>
          </div>
            </Link>
        </button>
        </div>
        </div>
        <AvatarTooltip hovered={hovered} cursorPosition={cursorPosition} />
      </div>
    </>
  );
};

export default Members;
