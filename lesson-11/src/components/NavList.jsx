import React, { useContext } from "react";
import { Context } from "../context/AppContext";
import Solutions from "./Solutionitem";

export default function NavList() {
  const { navigation } = useContext(Context);
  return (
    <>
      {navigation.map((item) => (
        <a
          href={item.href}
          key={item.name}
          className="text-base font-semibold leading-6 text-gray-900"
        >
          {item.name}
        </a>
      ))}
      <Solutions></Solutions>
    </>
  );
}
