import React from "react";

const SuccessStory = () => {
  return (
    <div className="pt-5 lg:pt-16 pb-10 lg:pb-52 bg-[#5c82cb] relative overflow-hidden">
      <div className="absolute w-full -top-2 lg:-top-48 z-0">
        <img className="w-full" src="assets/Ellipse2.png" alt="" />
      </div>
      <div className="w-[80%] lg:w-[60%] mx-auto px-3 lg:px-5 relative z-10">
        <h1 className="text-4xl text-white text-center font-sans font-bold my-3">
          Success Stories
        </h1>
        <p className="text-lg text-white text-center font-semibold">
          Over the years, we have helped numerous startups successfully
          establish their captive development centers. Join the roster of our
          successful collaborations.
        </p>
      </div>
    </div>
  );
};

export default SuccessStory;
