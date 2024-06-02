import React from "react";
import OurCreations from "./component/OurCreations";

export default function MainCreations() {
  return (
    <main className="mx-3  lg:mx-56 flex flex-col items-center lg:items-stretch ">
      <div className="uppercase flex justify-center  lg:justify-between">
        <span className="text-4xl lg:text-5xl ">our creations</span>
        <button className="bg-black text-white w-40 uppercase rounded invisible   lg:visible absolute  lg:static">
          see all
        </button>
      </div>
      <div>
        <OurCreations></OurCreations>
      </div>
      <button className="bg-white lg:bg-black text-black lg:text-white w-40 p-2 lg:w-40 uppercase   border-2 border-black lg:invisible mt-10 ">
        see all
      </button>
    </main>
  );
}
