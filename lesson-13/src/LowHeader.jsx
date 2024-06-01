import React from "react";
import "./LowHeader.css";

export default function LowHeader() {
  return (
    <div className="flex flex-col   mx-3  lg:mx-56   ">
      <div className=" my-36 ">
        <div class="lowerHeader-img relative  ">
          <div className="absolute lg:w-2/5 h-80 bg-white bottom-0 right-56  flex flex-col	 justify-between pl-16	">
            <h1 className="uppercase text-5xl pt-12 ">
              the leader in interactive vr
            </h1>
            <span className="">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award -winning creations have transformed businesses
              throigh digitial expeiences that bind to their brand.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
