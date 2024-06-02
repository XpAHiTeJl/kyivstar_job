import React from "react";
import Logo from "./component/Logo";
import Message from "./component/Message";
import Reserved from "./component/Reserved";
import NavigationFooter from "./component/NavigationFooter";

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
      <div className=" lg:flex justify-between  lg:flex mx-3  lg:mx-56 py-3  ">
        <div className="flex flex-col  pt-5  items-center	">
          <Logo></Logo>
          <NavigationFooter navigation={navigation}> </NavigationFooter>
        </div>
        <div className="flex  flex-col pt-5 items-end   ">
          <Message></Message>

          <Reserved></Reserved>
        </div>
      </div>
    </div>
  );
}
