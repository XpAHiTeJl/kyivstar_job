import React from "react";

export default function NavigationFooter({ navigation }) {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-x-10  items-center  pb-4 ">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-sm font-semibold leading-6 text-gray-900 "
        >
          <span className="border-text  my-1 lg:my-5 text-white">
            {item.name}
          </span>
        </a>
      ))}
    </div>
  );
}
