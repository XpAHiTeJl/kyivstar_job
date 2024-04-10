import React from "react";
import "./Lowermain.css";

export default function Lowermain() {
  return (
    <section className=" container min-vw-100 d-flex   m-0 p-0 ">
      <div className="leftphoto  " style={{ width: "30%" }}></div>
      <div className="centerphoto  p-5" style={{ width: "40%" }}>
        <span className="texttitle fs-2 text-uppercase ">
          about our furniture
        </span>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          praesentium fugit quidem culpa? Quod, voluptatibus libero eos sapiente
          explicabo at, consequatur amet illum, deserunt quisquam eaque dolor?
          Labore repellendus ullam cum omnis nam sunt quae.
        </p>
      </div>
      <div className="rightphoto " style={{ width: "30%" }}></div>
    </section>
  );
}
