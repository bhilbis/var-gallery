import React from "react";

const Service = () => {
  return (
    <>
      <div className="text-white px-[9rem] text-start">
        <p className="text-[46px] font-[500] mb-10">
            With our services, we ensure good <br /> management, easy communication, and <br />your satisfaction.
        </p>

        <div className="flex space-x-8">
          <div className="flex flex-col p-6 bg-[#1C1C1E] rounded-lg w-1/2">
            <div className="flex items-center mb-4">
              <div className="bg-[#53C2D1] w-8 h-8 mr-4"></div>
              <h2 className="text-3xl font-semibold">VarTech</h2>
            </div>
            <p className="text-lg font-medium">
                We focus on helping you bring your design to life according to your demands.
            </p>
          </div>

          <div className="flex flex-col p-6 bg-[#1C1C1E] rounded-lg w-1/2">
            <div className="flex items-center mb-4">
              <div className="bg-[#53C2D1] w-8 h-8 mr-4"></div>
              <h2 className="text-3xl font-semibold">VarCretife</h2>
            </div>
            <p className="text-lg font-medium">
                We focus on helping you create an interface design that meets your needs and preferences.
            </p>
          </div>
        </div>

      </div>
    </>
  );
};

export default Service;
