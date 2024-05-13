import React, { useContext } from "react";
import { Context } from "../context/AppContext";

export default function MenuButtonMobile() {
  const { navigation } = useContext(Context);
  return (
    <>
      {navigation.map((item) => (
        <a
          href={item.href}
          key={item.name}
          className=" flex flex-col text-base font-semibold leading-6 text-gray-900 hover:bg-gray-50"
        >
          {item.name}
        </a>
      ))}
    </>
  );
}
