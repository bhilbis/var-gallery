import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Bungee } from 'next/font/google'
import { AnimatedRoundedGradient } from '../backgrounds/animated-rounded-gradient/AnimatedRoundedGradient';

const bungee = Bungee({
    subsets: ["latin"],
    weight: ["400"],
  });

  const projectData = [
    {
      title: "Andranoviax - Personal Portofolio",
      description: "Website | Branding",
      imgSrc: "/assets/projects/andranoviax.png",
      width: 608,
      height: 399,
    },
    {
      title: "Bukwush - Discover Book Series",
      description: "Mobile app | UI - UX",
      imgSrc: "/assets/projects/aldo.png",
      width: 508,
      height: 381,
    },
    {
        title: "SMK Negeri 1 Purwosari",
        description: "Website | School",
        imgSrc: "/assets/test.png",
        width: 608,
        height: 399,
      },
      {
        title: "Project 1",
        description: "Website | School",
        imgSrc: "/assets/test.png",
        width: 508,
        height: 381,
      },
      {
        title: "SMK Negeri 1 Purwosari",
        description: "Website | School",
        imgSrc: "/assets/test.png",
        width: 608,
        height: 399,
      },
      {
        title: "Project 1",
        description: "Website | School",
        imgSrc: "/assets/test.png",
        width: 508,
        height: 381,
      },
      {
        title: "SMK Negeri 1 Purwosari",
        description: "Website | School",
        imgSrc: "/assets/test.png",
        width: 608,
        height: 399,
      },
      {
        title: "Project 1",
        description: "Website | School",
        imgSrc: "/assets/test.png",
        width: 508,
        height: 381,
      },
  ];

const ProjectPage = () => {
  return (
    <>
        <div className='text-[#fff] mb-[18rem]'>
            <div className={`text-center uppercase font-[400] text-[72px] relative z-40 bg-clip-text justify-center align-middle mt-[8rem] leading-none ${bungee.className}`}>
                <p className='mb-5'>Our Projects and </p>
                <p className='mb-5'>the <span className='bg-[#548187] px-1 rounded-3xl'>creations</span> we've </p>
                <p>made</p>
            </div>

            <div className='flex justify-between text-[#fff] text-[16px] font-[500] px-[9rem] py-10'>
              <p className='w-1/2 text-left'>We strive to deliver the best according to clients' requests,<br /> creating beautiful works.</p>
              <p className='w-1/2 text-right'>With our extensive capabilities and dedication, we strive to <br /> provide the best service tailored to your needs.</p>
            </div>

            <div className="grid grid-cols-2 gap-8 px-[9rem] py-10 mb-[1rem]">
          {projectData.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col items-center ${
                index % 2 === 0 ? "self-start" : "self-end mt-36"
              }`}
            >
              <div
                className={`relative w-${project.width} h-${project.height}`}
              >
                <Image
                  src={project.imgSrc}
                  alt={project.title}
                  width={project.width}
                  height={project.height}
                  className="object-cover"
                />
              </div>

              <div className="w-full max-w-7xl mt-8 ">
                <div className="flex justify-between items-center px-9">
                  <div className="flex flex-col">
                    <h1 className="font-semibold text-3xl mb-8">
                      {project.title}
                    </h1>
                    <p className="font-medium text-lg mb-4">
                      {project.description}
                    </p>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="border px-9 py-2 rounded-full hover:bg-gray-400"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

          <p className='text-center font-[500] text-[16px]'>And that's not all!, <a href="/" className='hover:text-white hover:underline'> View More</a></p>
        </div>
    </>
  )
}

export default ProjectPage
