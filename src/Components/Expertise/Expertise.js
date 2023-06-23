import React from "react";

const Expertise = () => {
  return (
    <div className="py-5 bg-[#eaeffe]">
      <h1 className="text-3xl text-[#314bb3] font-sans font-bold text-center my-5">
        Our Expertise
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-[95%] lg:w-[80%] mx-auto">
        <div className="bg-[#a2d8ef] p-8 flex flex-col justify-center items-center border-2 border-gray-100 rounded-lg shadow-lg">
          <h3 className="text-black text-center mb-3 text-2xl font-bold font-sans">
            Hiring
          </h3>
          <p className="text-black font-sans text-left text-lg text-semibold">
            Leveraging our deep understanding of the talent landscape, we devise
            effective hiring strategies to attract the best tech professionals.
          </p>
        </div>
        <div className="bg-[#a2d8ef] p-8 flex flex-col justify-center items-center border-2 border-gray-100 rounded-lg shadow-lg">
          <h3 className="text-black text-center mb-3 text-2xl font-bold font-sans">
            Human Resource Management
          </h3>
          <p className="text-black font-sans text-left text-lg text-semibold">
            We ensure a healthy and productive work environment by implementing
            efficient HR practices tailored to the unique needs of your startup.
          </p>
        </div>
        <div className="bg-[#a2d8ef] p-8 flex flex-col justify-center items-center border-2 border-gray-100 rounded-lg shadow-lg">
          <h3 className="text-black text-center mb-3 text-2xl font-bold font-sans">
            Taxation
          </h3>
          <p className="text-black font-sans text-left text-lg text-semibold">
            Our team navigates through the complexities of the tax system,
            ensuring compliance while optimizing financial efficiency.
          </p>
        </div>
        <div className="bg-[#a2d8ef] p-8 flex flex-col justify-center items-center border-2 border-gray-100 rounded-lg shadow-lg">
          <h3 className="text-black text-center mb-3 text-2xl font-bold font-sans">
            Regulatory Guidance
          </h3>
          <p className="text-black font-sans text-left text-lg text-semibold">
            We stay abreast of the ever-changing regulatory landscape, providing
            timely advice to ensure your startup's operations stay within legal
            boundaries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
