import React from "react";
import OurCreations from "./component/OurCreations";

export default function MainCreations() {
  return (
    <main className="mx-3  lg:mx-56  ">
      <div className="uppercase flex justify-center  lg:justify-between">
        <span className="text-4xl lg:text-5xl ">our creations</span>
        <button className="bg-black text-white w-40 uppercase rounded invisible   lg:visible absolute  lg:static">
          see all
        </button>
      </div>
      <div>
        <OurCreations></OurCreations>
      </div>
      <button className="bg-black text-white w-40 uppercase rounded   lg:invisible ">
        see all
      </button>
    </main>
  );
}
