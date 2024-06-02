import React from "react";
import Logo from "./component/Logo";
import Message from "./component/Message";
import Navigation from "./component/Navigation";
import Reserved from "./component/Reserved";

export default function Footer() {
  const navigation = [
    { name: "About", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Events", href: "#" },
    { name: "Products", href: "#" },
    { name: "Support", href: "#" },
  ];

  return (
    <div className=" bg-black ">
      <div className="flex mx-3  lg:mx-56 flex-col ">
        <div className="flex justify-between mt-10	">
          <Logo></Logo>
          <Message></Message>
        </div>
        <div className="flex items-center justify-between">
          <Navigation navigation={navigation}></Navigation>
          <Reserved></Reserved>
        </div>
      </div>
    </div>
  );
}
