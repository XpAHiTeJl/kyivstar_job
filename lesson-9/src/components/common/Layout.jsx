import React from "react";
import Nav from "../Nav";
import Slider from "../Slider";

const Layout = ({ children }) => {
  return (
    <div>
      <header className=" container min-vw-100  p-0 m-0 d-flex justify-content-between">
        <Nav />
        <Slider />
      </header>
      {children}
    </div>
  );
};

export default Layout;
