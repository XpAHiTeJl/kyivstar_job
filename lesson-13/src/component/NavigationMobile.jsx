import React from "react";

export default function NavigationMobile({ navigation }) {
  return (
    <div className="space-y-2 py-6">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
        >
          {item.name}
        </a>
      ))}
    </div>
  );
}
