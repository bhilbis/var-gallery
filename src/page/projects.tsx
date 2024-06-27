import React from "react";
import Image from "next/image";

const projectData = [
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
    title: "Project 2",
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
    title: "SMK Negeri 1 Purwosari",
    description: "Website | School",
    imgSrc: "/assets/test.png",
    width: 608,
    height: 399,
  },
  {
    title: "Project 3",
    description: "Website | School",
    imgSrc: "/assets/test.png",
    width: 508,
    height: 381,
  },
];

const Projects = () => {
  return (
    <>
      <div className="pt-20 justify-center items-center text-white pb-96">
        <p className="text-center font-[600] text-[46px] mb-[100px]">
          Innovation and Creativity at Its Best.
        </p>

        <div className="relative flex flex-col items-center">
          <div className="w-870 h-496 relative">
            <Image
              src={"/assets/test.png"}
              alt="smkpurwosari"
              width={870}
              height={496}
              className="object-cover"
            />
          </div>

          <div className="w-full max-w-7xl mt-8 px-4">
            <div className="flex justify-between items-center px-56">
              <div className="flex flex-col">
                <h1 className="font-semibold text-3xl mb-8">
                  SMK Negeri 1 Purwosari
                </h1>
                <p className="font-medium text-lg mb-4">Website <span className="mx-2">|</span> School</p>
              </div>

              <div className="  ">
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

        <div className="grid grid-cols-2 gap-8 px-[9rem] py-10 mb-[19rem]">
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

       <div className="text-center">
        <h1 className="font-bold text-[54px]">
          Our Creations <span className="underline underline-offset-[13px]">Go Beyond That!</span> <br />Discover More.
        </h1>
        <button
          type="button"
          title="serious"
          className="bg-[#101D1F] px-2 py-2 rounded-full mt-7 flex items-center justify-center mx-auto"
        >
          <div className="flex items-center">
            <div className="rounded-full bg-[#AAC8CD] mr-4 p-8"></div>
            <h1 className="pl-2 pr-4">SERIOUSLY?</h1>
          </div>
        </button>
      </div>
        </div>
    </>
  );
};

export default Projects;
