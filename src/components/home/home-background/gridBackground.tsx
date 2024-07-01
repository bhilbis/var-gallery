import React from "react";
import { Bungee } from "next/font/google";
import { AnimatedRoundedGradient } from "@/components/backgrounds/animated-rounded-gradient/AnimatedRoundedGradient";
import { cn } from "@/utils/cn";

const bungee = Bungee({
  subsets: ["latin"],
  weight: ["400"],
});

export function GridBackgroundDemo() {
  return (
    <>
      <div className="h-[54rem] w-full dark:bg-[#020505] bg-[#020505] dark:bg-grid-white/[0.2] bg-grid-white/[0.2] relative flex items-center justify-center">
        <AnimatedRoundedGradient className="top-[calc(20%-var(--size)/2)] left-[calc(35%-var(--size))] animate-first"/>
        <AnimatedRoundedGradient className=" bottom-[calc(50%-var(--size)/2)] right-[calc(35%-var(--size))] animate-first"/>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#020505] [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#020505] [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div>
        <div
          className={`text-center text-[96px] relative z-40 bg-clip-text text-transparent text-white leading-none ${bungee.className}`}
        >
          <p className="-mt-16 mb-5">GROWING,</p>
          <p className="mb-5">EVOLVING,</p>
          <p className="mb-5 flex items-center justify-center">
            <span className="bg-[#548187] px-2 py-1 rounded-md">PROVING</span>
            &nbsp;OUR
          </p>
          <p className="mb-5">WORTH.</p>
        </div>

        <div className="absolute bottom-24 left-0 right-0 p-5 flex justify-between text-white text-[16px] font-[500] mx-[122px]">
          <p className="w-1/2 text-left">
            A passion for realizing your desire for <br /> functional work and
            aesthetic design.
          </p>
          <p className="w-1/2 text-right">
            Driven by words, we grow and thrive,
            <br /> determined to prove that we can <br /> succeed.
          </p>
        </div>
      </div>
    </>
  );
}
