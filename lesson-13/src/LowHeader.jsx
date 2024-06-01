import React from "react";
import "./LowHeader.css";

export default function LowHeader() {
  return (
    <div className="flex flex-col   mx-3  lg:mx-56   ">
      <div className="flex my-36  relative">
        <div
          data-aos="fade-right"
          data-aos-offset="500"
          data-aos-duration="2500"
          data-aos-easing="ease-in-sine"
          class="flex-1 lowerHeader-img   "
        ></div>
        <div
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="1000"
          data-aos-duration="2000"
          className="absolute lg:w-2/5 h-80 bg-white bottom-0  lg:right-56  flex flex-col justify-evenly lg:justify-between lg:pl-16 text-center lg:text-left	"
        >
          <h1 className="uppercase text-4xl lg:text-5xl lg:pt-12 text-black hover:text-blue-600 ">
            the leader in interactive vr
          </h1>
          <span className="text-lg p-7 lg:p-0  text-black hover:text-blue-600	">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award -winning creations have transformed businesses throigh
            digitial expeiences that bind to their brand.
          </span>
        </div>
      </div>
    </div>
  );
}
