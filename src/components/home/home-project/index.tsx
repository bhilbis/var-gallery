"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GradientBackground } from "../home-background/gradientBackground";
import { AnimatedRoundedGradient } from "@/components/backgrounds/animated-rounded-gradient/AnimatedRoundedGradient";
import ProjectHeader from "./projectHeader";
import ProjectsList from "./projectList";
import SeriouslyButton from "./seriouslyButton";

const Projects: React.FC = () => {
  return (
    <div className="pt-20 justify-center items-center text-white pb-96">
      <ProjectHeader />
      <div className="relative flex flex-col items-center">
        <AnimatedRoundedGradient className="bottom-[calc(50%-var(--size)/2)] left-[calc(35%-var(--size))] animate-first" />
        <AnimatedRoundedGradient className="top-[calc(20%-var(--size)/2)] right-[calc(35%-var(--size))] animate-first" />
        <GradientBackground className="relative z-20">
          <div className="bg-transparant">
            <div className="w-870 h-496 relative">
              <Image src={"/assets/test.png"} alt="smkpurwosari" width={870} height={496} className="object-cover" loading="lazy" />
            </div>
            <div className="w-full max-w-7xl mt-8 px-4">
              <div className="flex justify-between items-center px-2">
                <div className="flex flex-col">
                  <h1 className="font-semibold text-3xl mb-8">SMK Negeri 1 Purwosari</h1>
                  <p className="font-medium text-lg mb-4">
                    Website <span className="mx-2">|</span> School
                  </p>
                </div>
                <div>
                  <Link legacyBehavior href={""}>
                    <a className="border px-9 py-2 rounded-full cursor-hand hover:bg-gray-400">Details</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </GradientBackground>
      </div>
      <ProjectsList />
      {/* <div className="relative z-20"> */}
      <AnimatedRoundedGradient className="top-[calc(10%-var(--size)/2)] right-[calc(90%-var(--size))] animate-second w-[40%]" />
      <AnimatedRoundedGradient className="top-[calc(20%-var(--size)/2)] left-[calc(90%-var(--size))] animate-second w-[50%]" />
      {/* </div> */}
      <SeriouslyButton />
    </div>
  );
};

export default Projects;
