import React, { useContext } from "react";
import { Context } from "../context/AppContext";

export default function NavList() {
  const { navigation } = useContext(Context);
  return (
    <>
      {navigation.map((item) => (
        <a
          href={item.href}
          key={item.name}
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          {item.name}
        </a>
      ))}
    </>
  );
}
