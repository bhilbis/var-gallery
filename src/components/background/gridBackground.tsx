import React from "react";
import { Bungee } from "next/font/google";

const bungee = Bungee({
  subsets: ["latin"],
  weight: ['400'],
});

export function GridBackgroundDemo() {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-black  dark:bg-grid-white/[0.2] bg-grid-white/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className={`text-[96px] text-center sm:text-7xl relative z-20 bg-clip-text text-transparent text-white leading-loose ${bungee.className} tracking-wider`}>
        <p className="-mt-10 mb-5">GROWING,</p>
        <p className="mb-5">EVOLVING,</p>
        <p className="mb-5 flex items-center justify-center">
        <span className="bg-[#548187] px-2 py-1 rounded-md">PROVING</span>&nbsp;OUR
        </p>
        <p className="mb-5">WORTH.</p>
      </div>
    </div>
  );
}