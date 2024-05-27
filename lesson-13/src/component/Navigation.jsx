import React from "react";
import "./Navigation.css";

export default function Navigation({ navigation }) {
  return (
    <div className="hidden lg:flex lg:gap-x-12 ">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-sm font-semibold leading-6 text-gray-900 "
        >
          <span className="border-text text-white">{item.name}</span>
        </a>
      ))}
    </div>
  );
}
