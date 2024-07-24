"use client";
import React from "react";
import Link from "next/link";

const SeriouslyButton: React.FC = () => (
  <div className="text-center relative z-30">
    <h1 className="font-bold text-[54px]">
      Our Creations <span className="underline underline-offset-[12px] opacity-[80%]">Go Beyond That!</span> <br />
      Discover More.
    </h1>
    <Link legacyBehavior href={"/projects"}>
      <a 
        title="serious" 
        className="bg-[#101D1F] px-10 py-10 rounded-full mt-7 flex items-center cursor-hand hover:custom-cursor justify-center mx-auto w-[230px] h-[60px]">
        <div className="flex items-center ">
          <div className="rounded-full bg-[#AAC8CD] mr-5 p-8"></div>
          <h1 className="text-lg pl-2 pr-4">SERIOUSLY?</h1>
        </div>
      </a>
    </Link>
  </div>
);

export default SeriouslyButton;
