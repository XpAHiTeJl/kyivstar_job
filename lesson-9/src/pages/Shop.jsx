import React from "react";
import Lowermain from "../components/lowermain";
import Slider from "../components/Slider";

import Nav from "../components/Nav";

export default function Shop() {
  return (
    <div className="App  ">
      <header className=" container min-vw-100  p-0 m-0 d-flex justify-content-between">
        <Nav type="shop" />
        <Slider />
      </header>
      <main className="container p-0 m-0">
        <Lowermain />
      </main>
    </div>
  );
}
