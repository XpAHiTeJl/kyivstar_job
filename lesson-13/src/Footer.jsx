import React from "react";
import Logo from "./component/Logo";
import Message from "./component/Message";

export default function Footer() {
  return (
    <div className=" bg-black">
      <div>
        <Logo></Logo>
        <Message></Message>
      </div>
    </div>
  );
}
