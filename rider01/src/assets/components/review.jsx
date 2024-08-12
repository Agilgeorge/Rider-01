import React from "react";
import anurag from "../images/anurag.jpg";
import lingesh from "../images/lingesh.jpg";
import arun from "../images/arun.jpg";
import cherry from "../images/cherry.jpeg";
import vsautos from "../images/vsautos.jpeg";

const Review = () => {
  return (
    <div>
      <div className="flex justify-center mt-12">
        <h1 className="font-felldo drop-shadow-xl font-semibold text-4xl">
          Ride Reviews
        </h1>
      </div>
      <div className="flex space-x-16 mt-8 justify-center">
        <div className="flex flex-col justify-center items-center w-84">
          <img src={anurag} className="h-80 w-84" alt="Anurag" />
          <p className="mt-4 text-center w-full">
            Anurag had an amazing experience on his ride. The scenic views and
            smooth roads made it unforgettable.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-84">
          <img src={lingesh} className="h-80 w-84" alt="Lingesh" />
          <p className="mt-4 text-center w-full">
            Lingesh enjoyed the thrill of the ride and the camaraderie among
            fellow riders.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-84">
          <img src={arun} className="h-80 w-84" alt="Arun" />
          <p className="mt-4 text-center w-full">
            Arun found the ride to be exhilarating and can't wait to join the
            next one.
          </p>
        </div>
      </div>

      <div className="flex space-x-16 mt-16  justify-center">
        <div className="flex flex-col justify-center items-center w-84">
          <img src={cherry} className="h-80 w-84" alt="Cherry" />
          <p className="mt-4 text-center w-full">
            Cherry: "Ride with Cherry, Glide through the Journey."
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-84">
          <img src={vsautos} className="h-80 w-84" alt="VS Autos" />
          <p className="mt-4 text-center w-full">
            VS Autos: "Driving Excellence, One Ride at a Time."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
