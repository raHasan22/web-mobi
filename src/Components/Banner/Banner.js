import React from "react";

const Banner = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="flex flex-col justify-center items-center bg-[#a2d8ef] py-10">
        <h1 className="text-5xl text-black font-sans font-bold mt-10 mb-5">
          Welcome to <span className="text-[#314bb3]">Incubyte</span>
        </h1>
        <p className="text-sm text-black">
          Building bridges to success in the tech ecosystem.
        </p>
        <div className="bg-[#8abae3] rounded-full h-[450px] w-[450px] p-0 my-5">
          <img
            className="w-full h-full"
            src="assets/Creativeteam-pana1.png"
            alt="banner"
          />
        </div>
      </div>
      <div className="absolute right-0 top-20">
        <img className="h-[400px]" src="assets/Ellipse1.png" alt="1" />
      </div>
      <div className="absolute -left-20 bottom-20">
        <img className="h-[400px]" src="assets/Ellipse1-1.png" alt="2" />
      </div>
      <div className="absolute left-10 -top-20">
        <img className="w-[400px]" src="assets/Ellipse2.png" alt="3" />
      </div>
      <div className="text-white text-left bg-[#3b58b9] py-16 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-5 w-[90%] lg:w-[80%]">About Us</h2>
        <p className="text-lg font-light font-sans w-[90%] lg:w-[80%]">
          With over 3 years of experience, we at Incubyte specialize in setting
          up captive development centers for growing startups, addressing key
          challenges and providing tailor-made solutions for your business
          needs.
        </p>

        <p></p>
      </div>
    </div>
  );
};

export default Banner;
